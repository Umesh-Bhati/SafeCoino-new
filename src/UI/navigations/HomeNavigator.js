import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as HomeScreens from '../screens';
import MainNavigator from './MainNavigator';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="MainNavigator" component={MainNavigator} />
      <HomeStack.Screen name="SelectCoin" component={HomeScreens.SelectCoin} />
      <HomeStack.Group navigationKey="Buy">
        <HomeStack.Screen name="BuyStp1" component={HomeScreens.BuyStp1} />
        <HomeStack.Screen name="BuyPayCard" component={HomeScreens.BuyPayCard} />
        <HomeStack.Screen name="BuyFinish" component={HomeScreens.BuyFinish} />
        
      </HomeStack.Group>
      <HomeStack.Group navigationKey="SellScreens">
        <HomeStack.Screen name="SellStp1" component={HomeScreens.SellStp1} />
        <HomeStack.Screen name="SellStp2" component={HomeScreens.SellStp2} />
        <HomeStack.Screen name="SellFinish" component={HomeScreens.SellFinish} />
      <HomeStack.Screen  name='TradeHistory' component={HomeScreens.TradeHistory} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
