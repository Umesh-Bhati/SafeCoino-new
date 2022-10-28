import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

//Local
import {
  AppButton,
  AppWrapper,
  CoinTxn,
  PerformaInvoice,
} from '../../components';
import {COLORS} from '../../themes';

const Home = ({navigation, route}) => {
  const [buyToSell, setBuyToSell] = useState(true);
  const [fiatValue, setFiatValue] = useState('');
  const [coinValue, setCoinValue] = useState('');

  const styles = StyleSheet.create({
    btnContainer: {
      flexDirection: 'row',
      width: '50%',
      alignSelf: 'center',
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: COLORS.border_Light,
      marginTop: 23,
    },
    buyBtn: {
      width: '50%',
      backgroundColor: buyToSell ? COLORS.success : 'transparent',
    },
    sellBtn: {
      width: '50%',
      backgroundColor: buyToSell ? 'transparent' : COLORS.error,
    },
  });

  const coinHandler = e => {
    let value = (parseInt(e) * route.params?.current_price).toString();
    setCoinValue(e);
    setFiatValue(value === 'NaN' ? '0' : value);
  };

  const fiatHandler = e => {
    let value = (parseInt(e) / route.params?.current_price).toString();
    setFiatValue(e);
    setCoinValue(value === 'NaN' ? '0' : value);
  };

  return (
    <AppWrapper
      title={buyToSell ? 'Buy' : 'Sell'}
      subTitle="Crypto purchase by fiat is available only in IRT"
      mailIcon={true}
      mailIconPress={() => {
        navigation.navigate('TradeHistory');
      }}
      profileIcon={true}>
      <View style={styles.btnContainer}>
        <AppButton
          title={'Buy'}
          titleStyle={{
            color: buyToSell ? COLORS.priTxt_Dark : COLORS.secTxt_Light,
          }}
          customContainerStyle={styles.buyBtn}
          onPress={() => setBuyToSell(true)}
        />
        <AppButton
          title={'Sell'}
          titleStyle={{
            color: buyToSell ? COLORS.secTxt_Light : COLORS.priTxt_Dark,
          }}
          customContainerStyle={styles.sellBtn}
          onPress={() => setBuyToSell(false)}
        />
      </View>
      {/* coinInput */}

      <CoinTxn
        titleTxt2={!buyToSell ? 'Pay' : 'Receive'}
        screenName={'SelectCoin'}
        data={route.params}
        editable={!buyToSell}
        onPress={() => navigation.navigate('SelectCoin')}
        value={coinValue}
        onChangeText={coinHandler}
      />
      <CoinTxn
        titleTxt2={!buyToSell ? 'Receive' : 'Pay'}
        IRT={true}
        editable={buyToSell}
        value={fiatValue}
        onChangeText={fiatHandler}
      />

      <Text
        style={{
          textAlign: 'center',
          marginTop: 30,
        }}>
        Warnings and descriptions
      </Text>

      <PerformaInvoice />

      <AppButton
        title={buyToSell ? 'Buy' : 'Sell'}
        customContainerStyle={{
          backgroundColor: buyToSell ? COLORS.success : COLORS.error,
          marginTop: 20,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate(buyToSell ? 'BuyStp1' : 'SellStp1')}
      />
    </AppWrapper>
  );
};
export default Home;
