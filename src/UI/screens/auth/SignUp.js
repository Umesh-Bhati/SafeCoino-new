import {Alert, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  AppButton,
  AppWrapper,
  AuthLapyImg,
  FormInput,
  Spinner,
} from '../../components';
import {COLORS} from '../../themes';
import {UserContext} from '../../../Store/context/UserContext';
import ValidatePassword from '../../components/auth/ValidatePassword';
import {storeAuthData} from '../../../Services/setData';

const SignUp = ({navigation}) => {
  const [rePassword, setRePassword] = useState('');
  const {email, setEmail, password, setPassword} = useContext(UserContext);
  const [secureTxt1, setSecureTxt1] = useState(true);
  const [secureTxt2, setSecureTxt2] = useState(true);
  const [spiner, setSpiner] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const handleIconPress1 = () => setSecureTxt1(!secureTxt1);
  const handleIconPress2 = () => setSecureTxt2(!secureTxt2);
  const handleEmailOrPhone = value => setEmail(value);
  const handleRePassword = value => {
    value === password ? setOpacity(true) : setOpacity(false);
    setRePassword(value);
  };
  const handleSignUp = () => {
    setSpiner(true);
    if (password === rePassword) {
      let authData = {
        email,
        password,
      };
      storeAuthData(authData);
      setSpiner(false);
      navigation.navigate('SignUpSuccess');
    }
  };

  useEffect(() => {
    setSpiner(false);
  }, []);

  return (
    <>
      <AppWrapper title={'Signup'} subTitle={'Welcome to the Safecoino family'}>
        <AuthLapyImg />
        <FormInput
          title={'Email or Phone number'}
          placeholder={'Email or Phone number'}
          textContentType="emailAddress"
          onChangeText={handleEmailOrPhone}
        />

        <FormInput
          title={'Password'}
          placeholder={'Password'}
          icon={true}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTxt={secureTxt1}
          onIconPress={handleIconPress1}
        />
        <FormInput
          title={'Re Password'}
          placeholder={'Password'}
          icon={true}
          onChangeText={handleRePassword}
          value={rePassword}
          secureTxt={secureTxt2}
          onIconPress={handleIconPress2}
        />
        {/* ValidatePassword */}

        <ValidatePassword />

        <View
          style={{
            opacity: opacity ? 1 : 0.5,
          }}>
          <AppButton
            title={'SignUp'}
            customContainerStyle={[styles.appBtn0]}
            onPress={handleSignUp}
            disabled={!opacity}
          />
        </View>
        <View style={styles.hairLine} />
        <AppButton
          title={'SignUp with your Google'}
          customContainerStyle={styles.appBtn}
          titleStyle={styles.titleStyle}
        />
      </AppWrapper>
      <Spinner visible={spiner} />
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  hairLine: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.secTxt_Dark,
    marginVertical: 30,
  },
  appBtn0: {
    marginTop: 25,
    opacity: 0,
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
