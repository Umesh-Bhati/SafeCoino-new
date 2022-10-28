import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';

const AppButton = ({title, customContainerStyle, titleStyle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {...customContainerStyle}]}
      onPress={onPress}
      activeOpacity={0.8} 
      disabled={disabled} >
      <Text style={[styles.title, {...titleStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.success
  },
  title: {
      fontSize: 18, 
      fontWeight: '400',
      color: COLORS.priTxt_Dark,
      textAlign: 'center',
      textAlignVertical: 'center'
  }
});
