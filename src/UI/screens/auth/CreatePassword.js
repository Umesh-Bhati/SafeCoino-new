import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  AppButton,
  AppWrapper,
  AuthLapyImg,
  FormInput,
  Spinner,
  ValidatePassword,
} from '../../components';
import {UserContext} from '../../../Store/context/UserContext';
import { storeAuthData } from '../../../Services/setData';

const CreatePassword = ({navigation}) => {
  const {email, password, setPassword} = useContext(UserContext);
  const [rePassword, setRePassword] = useState('');
  const [secureTxt1, setSecureTxt1] = useState(true);
  const [secureTxt2, setSecureTxt2] = useState(true);
  const [spiner, setSpiner] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleIconPress1 = () => setSecureTxt1(!secureTxt1);
  const handleIconPress2 = () => setSecureTxt2(!secureTxt2);
  const handleRePassword = value => {
    value === password ? setDisabled(true) : setDisabled(false);
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
      navigation.navigate('Login');
    }
    setSpiner(false);
  };

  return (
    <>
      <AppWrapper title={'Create password'} subTitle={'Create new password'}>
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
            flexGrow: 1,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              opacity: disabled ? 1 : 0.5,
            }}>
            <AppButton
              title={'Create password'}
              customContainerStyle={styles.appBtn0}
              onPress={handleSignUp}
              disabled={!disabled}
            />
          </View>
        </View>
      </AppWrapper>
      <Spinner visible={spiner} />
    </>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({});
