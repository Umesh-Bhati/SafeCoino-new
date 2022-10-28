import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppIcon,
  AppWrapper,
  IconTxtInput,
  PerformaInvoice,
  WarningMsg,
} from '../../../components';
import {COLORS} from '../../../themes';
import {images} from '../../../assets';

const SellStp2 = ({navigation}) => {
  const [payMethod, setPayMethod] = useState(true);

  const renderBankAcc = () => (
    <View
      style={{
        flexGrow: 1,
      }}>
      <Text
        style={{
          marginTop: 15,
        }}>
        Your Bank
      </Text>
      <IconTxtInput
        iconName={'arrow'}
        placeholder="your bank acc number"
        iconSize={12}
      />
      <WarningMsg
        msg={'Reconciliation is subject to the SHABA payment process'}
      />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 48,
            borderWidth: 1,
            borderColor: COLORS.warning,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 18,
          }}>
          <AppIcon name={'watch'} size={25} color={COLORS.warning} />
          <Text
            style={{
              color: COLORS.warning,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '400',
            }}>
            Reconciliation Estimated Time
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <AppWrapper
      headerShown={true}
      onBackPress={() => navigation.goBack()}
      title={'Sell'}
      mailIcon={true}
      mailIconPress={() => navigation.push('TradeHistory')}
      subTitle={'Crypto purchase by fiat is available only in IRT'}>
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

      <Text
        style={{
          marginRight: 16,
          marginVertical: 12,
        }}>
        Deposit
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <AppButton
          title={'To bank account'}
          customContainerStyle={{
            backgroundColor: payMethod ? COLORS.info : 'transparent',
            width: '45%',
            borderColor: COLORS.border_Light,
            borderWidth: !payMethod ? 1 : 0,
          }}
          titleStyle={{
            fontSize: 12,
            fontWeight: '500',
            color: payMethod ? COLORS.white : COLORS.secTxt_Light,
          }}
          onPress={() => setPayMethod(true)}
        />
        <AppButton
          title={'To account balance'}
          customContainerStyle={{
            backgroundColor: !payMethod ? COLORS.info : 'transparent',
            width: '45%',
            marginLeft: '10%',
            borderColor: COLORS.border_Light,
            borderWidth: payMethod ? 1 : 0,
          }}
          titleStyle={{
            fontSize: 12,
            fontWeight: '500',
            color: !payMethod ? COLORS.white : COLORS.secTxt_Light,
          }}
          onPress={() => setPayMethod(false)}
        />
      </View>
      {payMethod ? (
        renderBankAcc()
      ) : (
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 16,
            fontWeight: '300',
            lineHeight: 27,
            flexGrow: 1,
          }}>
          {
            'If you want to deposit to your account\nIf necessary, you can withdraw your balance\nby clearing the account'
          }
        </Text>
      )}
      <AppButton
        title={'Submit'}
        onPress={() => navigation.navigate('SellFinish')}
      />
    </AppWrapper>
  );
};

export default SellStp2;

const styles = StyleSheet.create({});
