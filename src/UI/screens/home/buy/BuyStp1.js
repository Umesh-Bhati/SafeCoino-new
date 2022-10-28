import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppIcon,
  AppWrapper,
  PerformaInvoice,
} from '../../../components';
import {COLORS} from '../../../themes';
import Icon from 'react-native-vector-icons/AntDesign';
import {images} from '../../../assets';

const BuyStp1 = ({navigation}) => {
  const [payMethod, setPayMethod] = useState(true);
  const [networkTyp, setNetworkTyp] = useState({
    eth: true,
    bnb: false,
    bsc: false,
  });
  const [check, setCheck] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [walletValue, setWalletValue] = useState('');

  const renderExtSection = () => (
    <>
      <Text style={styles.txt}>Network:</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <AppButton
          title={'ETH'}
          customContainerStyle={{
            backgroundColor: networkTyp.eth ? COLORS.info : 'transparent',
            width: '30%',
            borderColor: COLORS.border_Light,
            borderWidth: !networkTyp.eth ? 1 : 0,
          }}
          titleStyle={{
            fontSize: 12,
            color: networkTyp.eth ? COLORS.white : COLORS.secTxt_Light,
          }}
          onPress={() =>
            setNetworkTyp({
              eth: true,
              bnb: false,
              bsc: false,
            })
          }
        />

        <AppButton
          title={'BNB'}
          customContainerStyle={{
            backgroundColor: networkTyp.bnb ? COLORS.info : 'transparent',
            width: '30%',
            marginHorizontal: '5%',
            borderColor: COLORS.border_Light,
            borderWidth: !networkTyp.bnb ? 1 : 0,
          }}
          titleStyle={{
            fontSize: 12,
            color: networkTyp.bnb ? COLORS.white : COLORS.secTxt_Light,
          }}
          onPress={() =>
            setNetworkTyp({
              eth: false,
              bnb: true,
              bsc: false,
            })
          }
        />
        <AppButton
          title={'BSC'}
          customContainerStyle={{
            backgroundColor: networkTyp.bsc ? COLORS.info : 'transparent',
            width: '30%',
            borderColor: COLORS.border_Light,
            borderWidth: !networkTyp.bsc ? 1 : 0,
          }}
          titleStyle={{
            fontSize: 12,
            color: networkTyp.bsc ? COLORS.white : COLORS.secTxt_Light,
          }}
          onPress={() =>
            setNetworkTyp({
              eth: false,
              bnb: false,
              bsc: true,
            })
          }
        />
      </View>

      {/* wallet&qr */}
      <Text style={styles.txt}>Wallet</Text>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          marginRight: 16,
        }}>
        <AppIcon name={'qr'} size={24} />
      </TouchableOpacity>

      {/* walletAddreshInput */}
      <View
        style={{
          height: 48,
          width: '100%',
          borderWidth: 1,
          borderColor: COLORS.border_Light,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="wallet addresh"
          placeholderTextColor={'gray'}
          value={walletValue}
          onChangeText={e => setWalletValue(e)}
        />
        <TouchableOpacity>
          <AppIcon name={'paste'} size={20} />
        </TouchableOpacity>
      </View>

      {/* tag&demosection */}
      <View style={{opacity: check ? 0.6 : 1}}>
        <Text style={styles.txt}>Tag/ memo code</Text>
        <View
          style={{
            height: 48,
            width: '100%',
            borderWidth: 1,
            borderColor: COLORS.border_Light,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            alignItems: 'center',
            opacity: 3,
          }}>
          <TextInput
            placeholder="Tag code"
            placeholderTextColor={'gray'}
            editable={!check}
            value={tagValue}
            onChangeText={e => setTagValue(e)}
          />
          <TouchableOpacity style={{}} disabled={check}>
            <AppIcon name={'paste'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          marginTop: 13,
        }}>
        <Icon
          name="checksquare"
          size={18}
          color={COLORS.warning}
          style={{
            backgroundColor: !check ? COLORS.warning : 'transparent',
            height: 16,
            width: 16,
            marginRight: 10,
            borderRadius: 3,
          }}
          onPress={() => setCheck(!check)}
        />
        <Text>My wallet does not need a tag / memo code</Text>
      </View>
    </>
  );

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
      <Text style={styles.txt}>Wallet:</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <AppButton
          title={'External'}
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
          title={'Internal'}
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

      {payMethod && renderExtSection()}

      <AppButton
        disabled={!((walletValue && check) || tagValue || !payMethod)}
        title={'Next'}
        customContainerStyle={{
          position: payMethod ? 'relative' : 'absolute',
          alignSelf: 'center',
          bottom: 0,
          marginBottom: payMethod ? 40 : 30,
          marginTop: 20,
          backgroundColor:  
            (walletValue && check) || tagValue || !payMethod
              ? COLORS.success
              : 'transparent',
          borderWidth: 1,
          borderColor: COLORS.border_Light,
        }}
        titleStyle={{
          color:
            (walletValue && check) || tagValue || !payMethod
              ? COLORS.white
              : COLORS.secTxt_Light,
        }}
        onPress={()=>navigation.push("BuyPayCard")}
      />
    </AppWrapper>
  );
};

export default BuyStp1;

const styles = StyleSheet.create({
  txt: {
    left: 16,
    marginVertical: 16,
    fontSize: 14,
    fontWeight: '300',
    color: COLORS.priTxt_Light,
  },
});
