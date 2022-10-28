import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from './AppIcon';
import {COLORS} from '../../themes';

const IconTxtInput = ({
  inputValue,
  iconName,
  iconSize,
  placeholder,
  placeholderTextColor = 'gray',
  onChangeText,
  customTxtInputStyle
}) => {
  return (
    <View
      style={{
        height: 48,
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.border_Light,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginVertical: 16
      }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={inputValue}
        onChangeText={onChangeText}
        style={{
          color: 'black',
          ...customTxtInputStyle
        }}
      />
      <TouchableOpacity>
        <AppIcon name={iconName} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export default IconTxtInput;

const styles = StyleSheet.create({});
