import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../../themes';
import {
  AppButton,
  AppIcon,
  AppWrapper,
  FormInput,
  PerformaInvoice,
  Timer,
} from '../../../components';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {images} from '../../../assets';

const {height} = Dimensions.get('screen');

const BuyPayCard = ({navigation}) => {
  const [payMethod, setPayMethod] = useState(true);
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(9);

  useEffect(() => {
    payMethod
      ? null
      : setTimeout(
          () => setSeconds(seconds => (seconds === 0 ? 0 : seconds - 1)),
          1000,
        );
  }, [seconds, payMethod]);

  const renderPayByBalance = () => {
    return (
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
        }}>
        {/* account balance */}
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            backgroundColor: '#F7F8FA',
            padding: 20,
            marginVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{
                color: "#495057",
                fontSize: 12,
                fontWeight: '300'
            }} >Account Balance</Text>
            <Text style={{
                color: "#1B1E21",
                fontWeight: '500',
                fontSize: 14
            }} >45,000,000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 16
            }}>
            <Text style={{
                color: "#495057",
                fontSize: 12,
                fontWeight: '300'
            }} >Account Balance</Text>
            <Text style={{
                color: "#1B1E21",
                fontWeight: '500',
                fontSize: 14
            }} >45,000,000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{
                color: "#495057",
                fontSize: 12,
                fontWeight: '300'
            }} >Account Balance</Text>
            <Text style={{
                color: COLORS.error,
                fontWeight: '500',
                fontSize: 14
            }} >45,000,000</Text>
          </View>
          
        </View>

        {/* securty section */}
        <FormInput
          title={'Securty code'}
          placeholder={'SMS/ Google Authentication'}
        />

        {/* timer */}
        <Timer seconds={seconds} />

        {/* buttons */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 38,
          }}>
          <AppButton
            title={'Payment'}
            customContainerStyle={{
              backgroundColor: 'transparent',
              borderColor: COLORS.border_Light,
              borderWidth: 1,
              width: '35%',
            }}
            titleStyle={{
              color: COLORS.secTxt_Dark,
            }}
          />
          <AppButton
            title={'Add balance'}
            customContainerStyle={{
              backgroundColor: 'transparent',
              borderColor: COLORS.warning,
              borderWidth: 1,
              width: '60%',
              marginLeft: '3%',
            }}
            titleStyle={{
              color: COLORS.warning,
            }}
            onPress={() => navigation.navigate('BuyFinish')}
          />
        </View>
      </View>
    );
  };

  const renderPayByCard = () => {
    return (
      <>
        <FormInput
          title={'Your Bank'}
          icon={true}
          arrowIcon={true}
          onIconPress={() => setVisible(true)}
          placeholder={"Card number"}
        />

        <AppButton
          // disabled={!((walletValue && check) || tagValue || !payMethod)}
          title={'Payment'}
          customContainerStyle={{
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: COLORS.success,
            borderWidth: 1,
            borderColor: COLORS.border_Light,
          }}
          titleStyle={{
            color: COLORS.white,
          }}
        />
      </>
    );
  };

  const renderBankModal = () => {
    return (
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            flex: 0.5,
          }}
          onPress={() => setVisible(false)}
        />
        <View
          style={{
            flex: 0.5,
            backgroundColor: '#F7F8FA',
          }}>
          <View
            style={{
              width: '100%',
              height: 48,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AppIcon
              name={'infoTag'}
              size={20}
              style={{
                position: 'absolute',
                left: 20,
              }}
            />
            <Text style={{
                color: 'black',
                fontWeight: '300'
            }} >Select your bank</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                height: 48,
                borderTopWidth: 1,
                borderColor: COLORS.border_Light,
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontWeight: '300'
                }}>
                6104-3377-2123-2123
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                height: 48,
                borderTopWidth: 1,
                borderColor: COLORS.border_Light,
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontWeight: '300'
                }}>
                6104-3377-2123-2123
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                height: 48,
                borderTopWidth: 1,
                borderColor: COLORS.border_Light,
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontWeight: '300'
                }}>
                6104-3377-2123-2123
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <AppWrapper
      title={'Buy'}
      subTitle={'Crypto purchase by fiat is available only in IRT'}
      headerShown={true}
      onBackPress={() => navigation.goBack()}
      mailIcon={true}
      mailIconPress={() => navigation.push('TradeHistory')}>
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
      <Text style={styles.txt}>Pay</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <AppButton
          title={'Pay by card'}
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
          title={'Pay by balance'}
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
      {payMethod ? renderPayByCard() : renderPayByBalance()}

      {renderBankModal()}
    </AppWrapper>
  );
};

export default BuyPayCard;

const styles = StyleSheet.create({
  txt: {
    left: 16,
    marginVertical: 16,
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.priTxt_Light,
  },
});
