import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckIcon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../themes';

const CheckMark = ({check, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          height: 18,
          width: 18,
          backgroundColor: COLORS.warning,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          marginRight: 10,
        }}
        activeOpacity={0.9}
        onPress={onPress}>
        {check && <CheckIcon name="check" size={8} color={COLORS.white} />}
      </TouchableOpacity>
      <Text>My wallet does not need a tag / memo code</Text>
    </View>
  );
};

export default CheckMark;
