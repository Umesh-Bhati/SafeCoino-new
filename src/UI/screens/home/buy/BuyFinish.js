import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  AppButton,
  AppIcon,
  AppWrapper,
  PerformaInvoice,
} from '../../../components';
import {COLORS} from '../../../themes';
import {images} from '../../../assets';

const BuyFinish = ({navigation}) => {
  return (
    <AppWrapper
      headerShown={true}
      title={'Buy'}
      subTitle={'Crypto purchase by fiat is available only in IRT'}
      onBackPress={() => navigation.goBack()}
      mailIcon={true} 
      mailIconPress={() => navigation.push("TradeHistory")} >
      <PerformaInvoice />
      <Image
        source={images.hpyGuy}
        style={{
          resizeMode: 'contain',
          height: 285,
          width: "100%",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            marginVertical: 19,
            lineHeight: 29,
          }}>
          for more details about your transactions, please{'\n'}click on the
          button below;
        </Text>

        {/* order number */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            borderRadius: 10,
            backgroundColor: '#F7F8FA',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              lineHeight: 16,
              color: 'black',
              marginRight: 46,
            }}>
            Order number
          </Text>
          <Text
            style={{
              marginRight: 19,
              color: "#191919",
              fontWeight: '300',
              fontSize: 14
            }}>
            BU-324567865
          </Text>
          <TouchableOpacity>
            <AppIcon name={'copy'} size={24} />
          </TouchableOpacity>
        </View>

          <AppButton
            title={'Transaction'}
            customContainerStyle={{
              borderWidth: 1,
              borderColor: COLORS.warning,
              backgroundColor: 'transparent',
              marginTop: "15%"
            }}
            titleStyle={{
              color: COLORS.warning,
            }}
          />
      </View>
    </AppWrapper>
  );
};

export default BuyFinish;

const styles = StyleSheet.create({});
