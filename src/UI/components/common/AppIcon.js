import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../../assets';
import {COLORS} from '../../themes';

const AppIcon = ({name, size, color, style, onPress}) => {
  return (
    // <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Image
        source={icons[name]}
        style={{
          height: size,
          width: size,
          resizeMode: 'contain',
          tintColor: color,
          ...style,
        }}
      />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create();
export default AppIcon;
