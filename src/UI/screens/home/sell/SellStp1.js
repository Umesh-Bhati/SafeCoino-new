import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppWrapper,
  CanclePopup,
  IconTxtInput,
  NetworkSection,
  PerformaInvoice,
  WarningMsg,
} from '../../../components';
import {COLORS} from '../../../themes';
import {images} from '../../../assets';

const SellStp1 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppWrapper
      title={'Sell'}
      subTitle={'Crypto purchase by fiat is available only in IRT'}
      headerShown={true}
      onBackPress={() => navigation.goBack()}
      mailIcon={true}
      mailIconPress={() => navigation.push('TradeHistory')}
      customScrollContainer={{
        paddingBottom: '20%',
      }}>
      <View
        style={{
          width: '100%',
          height: 48,
          marginTop: 20,
        }}>
        <Image
          source={images.warningMsg}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <PerformaInvoice />
      <NetworkSection />
      <WarningMsg
        msg={
          'Before the final confirmation of sending the currency, make sure that the address is correct'
        }
        customContainerStyle={{marginTop: 10}}
      />
      <WarningMsg
        msg={
          'Note that the sent currency must be entered after deducting the transfer fee.'
        }
      />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            marginLeft: 16,
            color: '#495057',
            fontWeight: '300',
            fontSize: 14,
          }}>
          Enter Hash Code
        </Text>
        <IconTxtInput
          iconName={'paste'}
          iconSize={20}
          placeholder={'wallet addresh'}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 38,
          }}>
          <AppButton
            title={'Cancle'}
            customContainerStyle={{
              backgroundColor: 'transparent',
              borderColor: COLORS.error,
              borderWidth: 1,
              width: '25%',
            }}
            titleStyle={{
              color: COLORS.error,
            }}
            onPress={() => setModalVisible(true)}
          />
          <AppButton
            title={'Next'}
            customContainerStyle={{
              backgroundColor: 'transparent',
              borderColor: COLORS.success,
              borderWidth: 1,
              width: '70%',
              marginLeft: '3%',
            }}
            titleStyle={{
              color: COLORS.success,
            }}
            onPress={() => navigation.navigate('SellStp2')}
          />
        </View>
      </View>
      <CanclePopup
        visible={modalVisible}
        iconPress={() => setModalVisible(false)}
        btn1Press={() => setModalVisible(false)}
        btn2Press={() => navigation.navigate('Home')}
      />
    </AppWrapper>
  );
};

export default SellStp1;

const styles = StyleSheet.create({});
