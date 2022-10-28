import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIcon from './AppIcon';
import {COLORS} from '../../themes';

const Timer = ({seconds}) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14
    }} >
      <AppIcon name={'timerWatch'} size={24} />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: COLORS.error,
          marginLeft: 10
        }}>
        00:0{seconds}
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({});
