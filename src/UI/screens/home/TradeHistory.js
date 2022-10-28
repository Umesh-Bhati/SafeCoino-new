import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppIcon, HeaderInfo, TradeView} from '../../components';
import {COLORS} from '../../themes';
import Icon from 'react-native-vector-icons/AntDesign';

const TradeHistory = ({navigation}) => {
  const [buyToSell, setBuyToSell] = useState(true);

  const renderBuySellBtn = () => (
    <View
      style={{
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: COLORS.border_Light,
        marginTop: 23,
      }}>
      <AppButton
        title={'Buy'}
        titleStyle={{
          color: buyToSell ? COLORS.priTxt_Dark : COLORS.secTxt_Light,
        }}
        customContainerStyle={{
          width: '50%',
          backgroundColor: buyToSell ? COLORS.secTxt_Light : 'transparent',
        }}
        onPress={() => setBuyToSell(true)}
      />
      <AppButton
        title={'Sell'}
        titleStyle={{
          color: buyToSell ? COLORS.secTxt_Light : COLORS.priTxt_Dark,
        }}
        customContainerStyle={{
          width: '50%',
          backgroundColor: buyToSell ? 'transparent' : COLORS.secTxt_Light,
        }}
        onPress={() => setBuyToSell(false)}
      />
      
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator = {false} >
     <View style={{
      marginVertical: 10
     }} >
     <Icon name="left" size={20} color={'#323232'} onPress={() => navigation.goBack()} />
     </View>
      <HeaderInfo
        title={'Trade history'}
        subTitle={'You can find all details of your trades'}>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <AppIcon name={'cryptoCurrency'} size={24} />
          <AppIcon name={'filter'} size={20} style={{marginHorizontal: 20}} />
        </View>
      </HeaderInfo>
      {/* searchInput */}
      <View
        style={{
          height: 48,
          width: '100%',
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: COLORS.border_Light,
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.secTxt_Light}
          style={{
            color: 'black'
          }}
        />
        <Icon
          name="search1"
          color={COLORS.secTxt_Light}
          size={20}
          style={{position: 'absolute', right: 20}}
        />
      </View>
      {renderBuySellBtn()}
      <TradeView/>
      <TradeView/>
      <TradeView/>
      <TradeView/>
      
    </ScrollView>
  );
};

export default TradeHistory;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg_Light,
    padding: 16,
  },
});
