import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton, AppWrapper, PerformaInvoice} from '../../../components';
import {images} from '../../../assets';
import {COLORS} from '../../../themes';

const SellFinish = ({navigation}) => {
  return (
    <AppWrapper
      headerShown={true}
      title={'Sell'}
      subTitle={'Crypto purchase by fiat is available only in IRT'}
      onBackPress={() => navigation.goBack()} 
      mailIcon
      mailIconPress={()=>navigation.push("TradeHistory")}
     >
        
      <PerformaInvoice />
      <Image
        source={images.hpyGuy}
        style={{
          resizeMode: 'contain',
          height: 285,
          width: '100%',
          marginVertical: 10,
        }}
      />
     <View style={{
        flexGrow: 1,
        justifyContent: 'flex-end'
     }} >
     <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          color: 'black'
        }}>
        The hash code was registered
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          marginVertical: 19,
        }}>
        {
          'Once the transfer is confirmed, your account\nbalance will be transferred'
        }
      </Text>
      <AppButton
        title={'Transaction'}
        customContainerStyle={{
          borderWidth: 1,
          borderColor: COLORS.warning,
          backgroundColor: 'transparent',
          // marginBottom: '120%'
        }}
        titleStyle={{
          color: COLORS.warning,
        }}
      />
     </View>

    </AppWrapper>
  );
};

export default SellFinish;

const styles = StyleSheet.create({});
