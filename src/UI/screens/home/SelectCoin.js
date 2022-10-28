import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fetchCoinData} from '../../../Services/Api';

//images
import {Spinner} from '../../components';
import {COLORS} from '../../themes';

const Tab = createMaterialTopTabNavigator();
const SelectCoin = ({navigation}) => {
  const [coinData, setCoinData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [favList, setFavList] = useState([]);
  const [showSpiner, setShowSpiner] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [favColor, setFavColor] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');

  const fetchCoinsData = async () => {
    setRefreshing(true);
    try {
      setCoinData(await fetchCoinData());
      setShowSpiner(false);
      setRefreshing(false);
    } catch (error) {
      console.warn(error);
      setShowSpiner(false);
      setRefreshing(false);
    }
  };

  const searchItems = searchValue => {
    setSearchTxt(searchValue);
    setRefreshing(false);
    if (searchTxt !== '') {
      const filteredData = coinData.filter(item => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchTxt?.toLowerCase());
      });

      setFilteredResults(filteredData);
      setRefreshing(false);
    } else {
      setFilteredResults(coinData);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    console.info('inside effect');
    fetchCoinsData();
    return () => {
      setCoinData([]);
      setFilteredResults([]);
    };
  }, []);

  const addFav = addedItem => {
    let array = favList;
    let addArray = true;
    array.map((item, key) => {
      if (item?.id === addedItem.id) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(addedItem);
    }
    setFavList([...array]);
  };

  let CoinCard = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingHorizontal: 28,
        }}
        onPress={() => navigation.navigate('Home', item)}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 25,
            height: 25,
          }}
        />
        <Text
          style={{
            marginLeft: 25,
            textTransform: 'uppercase',
            color: 'black',
            fontWeight: '300',
            fontSize: 14,
          }}>
          {item.symbol}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            right: 28,
            position: 'absolute',
          }}
          onPress={() => addFav(item)}>
          {favList.some(i => i.id === item.id) ? (
            <Icon name="star" color={COLORS.warning} size={24} />
          ) : (
            <Icon name="staro" color={COLORS.secTxt_Light} size={24} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const All = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F8FA',
        }}>
        <FlatList
          data={searchTxt.length > 1 ? filteredResults : coinData}
          renderItem={({item}) => <CoinCard item={item} />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '95%',
                height: 0.5,
                backgroundColor: COLORS.border_Light,
                alignSelf: 'center',
              }}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => fetchCoinsData()}
            />
          }
          // onEndReached={() => {
          //   fetchCoinsData();
          // }}
        />
      </View>
    );
  };
  const Recent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F7F8FA',
        }}>
        <Text style={{
          color:'black',
          fontWeight: '600',
          fontSize: 16
        }} >Will be avl as soon as possible...</Text>
      </View>
    );
  };
  const Favorite = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F8FA',
        }}>
        <FlatList
          data={favList}
          renderItem={({item}) => {
            return <CoinCard item={item} />;
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                fetchCoinsData();
                setRefreshing(false);
              }}
            />
          }
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bg_Light,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          left: 20,
          top: 20,
        }}>
        <Icon name="left" size={20} color="#323232" />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 48,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: COLORS.border_Light,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 17,
          }}>
          <TextInput
            placeholder="Large Input"
            placeholderTextColor="black"
            value={searchTxt}
            style={{
              color: 'black',
              fontWeight: '400'
            }}
            onChangeText={txt => {
              searchItems(txt);
            }}
          />
          <Icon name="search1" color={COLORS.secTxt_Light} size={24} />
        </View>
      </View>
      <View
        style={{
          flex: 3,
        }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12, textTransform: 'capitalize'},
            tabBarStyle: {
              backgroundColor: '#F7F8FA',
              justifyContent: 'center',
              elevation: 0,
            },
            tabBarInactiveTintColor: '#495057',
            tabBarActiveTintColor: 'black',
            tabBarIndicatorStyle: {
              backgroundColor: 'black',
              borderRadius: 0.5,
              alignSelf: 'center',
            },
            tabBarBounces: true,
          }}>
          <Tab.Screen name="All coins" component={All} />
          <Tab.Screen name="Recently" component={Recent} />
          <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
      </View>
      <Spinner visible={showSpiner} />
    </View>
  );
};

export default SelectCoin;
