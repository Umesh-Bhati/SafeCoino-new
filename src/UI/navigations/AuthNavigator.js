import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as AuthScreens from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={AuthScreens.Login} />
      <AuthStack.Screen name="SignUp" component={AuthScreens.SignUp} />
      <AuthStack.Screen
        name="SignUpSuccess"
        component={AuthScreens.SignUpSuccess}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={AuthScreens.ForgotPassword}
      />
      <AuthStack.Screen
        name="CreatePassword"
        component={AuthScreens.CreatePassword}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
