import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  AppButton,
  AppWrapper,
  AuthLapyImg,
  ErrorMessage,
  FormInput,
  Spinner,
} from '../../components';
import {UserContext} from '../../../Store/context/UserContext';
import {getAuthData} from '../../../Services/getData';

const ForgotPassword = ({navigation}) => {
  const [_email, setEmail] = useState('');
  const [spiner, setSpiner] = useState(false);
  const emailAdd = useRef('');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);

  const getEmail = async () => {
    const {email} = await getAuthData();
    emailAdd.current = email;
  };

  useEffect(() => {
    getEmail();
    return () => (emailAdd.current = '');
  }, []);

  const handleButtonPress = () => {
    setSpiner(true);
    emailAdd.current !== _email
      ? setIsEmailCorrect(true)
      : navigation.navigate('CreatePassword');
    setSpiner(false);
  };

  return (
    <>
      <AppWrapper
        title={'Forgot your password'}
        subTitle={'Do not worry, we will recover your password again'}
        headerShown
        onBackPress={() => navigation.goBack()}>
        <AuthLapyImg />

        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}>
          <FormInput
            title={'Email'}
            value={_email}
            onChangeText={e => {
              setEmail(e);
              setIsEmailCorrect(false);
            }}
            placeholder={'Your Email'}
            errorMsg={
              isEmailCorrect ? 'There is no email entered in the system' : null
            }
          />
          <AppButton
            title={'Submit'}
            customContainerStyle={{
              marginTop: 140,
            }}
            onPress={handleButtonPress}
          />
        </View>
      </AppWrapper>
      <Spinner visible={spiner} />
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
