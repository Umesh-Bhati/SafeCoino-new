import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppButton from './AppButton';
import AppIcon from './AppIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes';
import IconTxtInput from './IconTxtInput';

const NetworkSection = () => {
  const [networkTyp, setNetworkTyp] = useState({
    eth: true,
    bnb: false,
    bsc: false,
  });
  const [check, setCheck] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [walletValue, setWalletValue] = useState('');
  return (
    <>
      {/* wallet&qr */}
      <Text style={[styles.txt, {top: 25}]}>Wallet addresh</Text>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          marginRight: 16,
        }}>
        <AppIcon name={'qr'} size={24} />
      </TouchableOpacity>
      {/* walletAddreshInput */}
      <IconTxtInput iconName={'paste'} placeholder={'type here'} iconSize={24} customTxtInputStyle={{
        color: "#191919",
        fontSize: 14,
        fontWeight: '400'
      }} />
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
    </>
  );
};

export default NetworkSection;

const styles = StyleSheet.create({
  txt: {
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
    color: "#191919",
    fontWeight: '300',
    fontSize: 14
  },
});
