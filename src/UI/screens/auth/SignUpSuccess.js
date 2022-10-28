import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {AppButton, AppWrapper, AuthLapyImg, FormInput} from '../../components';
import {images} from '../../assets';
import {COLORS} from '../../themes';

const SignUpSuccess = ({navigation}) => {
  return (
    <AppWrapper
      title={'SignUpSuccess'}
      subTitle={'Welcome to the Safecoino family'}
      headerShown={true}
      onBackPress={() => navigation.goBack()}>
      <AuthLapyImg />

      <View style={styles.bottomContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.wishTxt}>Congratulations</Text>
          <Text style={styles.infoTxt}>
            {'Your registration was successful\nLogin with your new account.'}
          </Text>
        </View>
        <AppButton
          title={'Login'}
          customContainerStyle={styles.appBtn0}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </AppWrapper>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishTxt: {
    fontWeight: '400',
    fontSize: 20,
    color: COLORS.success,
    marginBottom: 18,
  },
  infoTxt: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
  },
  appBtn0: {
    marginTop: 174,
  },
});
