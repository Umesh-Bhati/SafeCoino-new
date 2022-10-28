import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  AppButton,
  AppWrapper,
  AuthLapyImg,
  ErrorMessage,
  FormInput,
  Spinner,
} from '../../components';
import {images} from '../../assets';
import {COLORS} from '../../themes';
import {UserContext} from '../../../Store/context/UserContext';
import {getAuthData} from '../../../Services/getData';
import {storeAuthData} from '../../../Services/setData';

const Login = ({navigation}) => {
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  const [secureTxt, setSecureTxt] = useState(true);
  const [spiner, setSpiner] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const {setAuthentication} = useContext(UserContext);
  const handleEmail = value => setEmail(value);
  const handlePassword = value => {
    setPassword(value);
    setErrorStatus(false);
  };
  const handleLogin = async () => {
    setSpiner(true);
    try {
      const {email, password} = await getAuthData();
      let authData = {email, password, auth: true};
      if (_email === email && _password === password) {
        setAuthentication(true);
        storeAuthData(authData);
        setSpiner(false)
      } else {
        setErrorStatus(true);
        setSpiner(false);
      }
    } catch (error) {
      console.warn(error);
      setSpiner(false);
    setErrorStatus(true);
    }
  };
  const handleIconPress = () => setSecureTxt(!secureTxt);

  return (
    <>
      <AppWrapper title={'Login'} subTitle={"We'm so glad you're back"}>
        <AuthLapyImg />
        <FormInput
          title={'Email or Phone number'}
          placeholder={'Email or Phone number'}
          onChangeText={handleEmail}
          value={_email}
        />
        <FormInput
          title={'Password'}
          placeholder={'Password'}
          icon={true}
          secureTxt={secureTxt}
          onIconPress={handleIconPress}
          onChangeText={handlePassword}
          value={_password}
          errorMsg={errorStatus && 'Password or username is wrong'}
          errorMsgStyle={{
            textAlign: 'center',
            marginTop: 47,
          }}
        />
        <Text
          style={{
            color: COLORS.warning,
            textAlign: 'center',
            marginTop: 32,
          }}
          onPress={() => navigation.push('ForgotPassword')}>
          Forgot password?
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
          }}>
          Do not have an account?{' '}
          <Text
            style={{
              color: COLORS.warning,
            }}
            onPress={() => navigation.push('SignUp')}>
            SignUp
          </Text>
        </Text>
        <AppButton
          title={'Login'}
          customContainerStyle={styles.appBtn0}
          onPress={handleLogin}
        />
        <View style={styles.hairLine} />
        <AppButton
          title={'Login with your Google'}
          customContainerStyle={styles.appBtn}
          titleStyle={styles.titleStyle}
        />
      </AppWrapper>
      <Spinner visible={spiner} />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  hairLine: {
    height: 1.5,
    width: '100%',
    backgroundColor: COLORS.secTxt_Dark,
    marginVertical: 30,
  },
  appBtn0: {
    marginTop: 25,
  },
  appBtn: {
    backgroundColor: 'transparent',
    borderColor: COLORS.secTxt_Light,
    borderWidth: 1,
  },
  titleStyle: {
    color: COLORS.priTxt_Light,
  },
});
