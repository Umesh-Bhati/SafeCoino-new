import React, {useRef, useEffect, useState} from 'react';
import {View, Animated} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as TabScreens from '../screens';
import {AppIcon} from '../components';
import {COLORS} from '../themes';

const Tab = createBottomTabNavigator();

const MainNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.warning,
        tabBarItemStyle: {
          borderLeftWidth: 0.5,
          borderLeftColor: COLORS.secTxt_Dark,
          marginVertical: 5,
        },
        tabBarHideOnKeyboard: 'true'
      }}>
      <Tab.Screen
        name="Home"
        component={TabScreens.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              name={'home'}
              color={focused ? COLORS.warning : COLORS.iconColor}
              size={17}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={TabScreens.Market}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              name={'market'}
              color={focused ? COLORS.warning : COLORS.iconColor}
              size={17}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TabScreens.Trade}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Animated.View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: focused ? COLORS.warning : COLORS.border_Light,
                  bottom: 20,
                }}>
                <AppIcon
                  name={'trade'}
                  color={focused ? COLORS.warning : COLORS.iconColor}
                  size={20}
                />
              </Animated.View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Otc"
        component={TabScreens.Otc}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              name={'otc'}
              color={focused ? COLORS.warning : COLORS.iconColor}
              size={17}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={TabScreens.Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              name={'wallet'}
              color={focused ? COLORS.warning : COLORS.iconColor}
              size={17}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
