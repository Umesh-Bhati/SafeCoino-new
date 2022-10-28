import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import AppIcon from '../common/AppIcon';
import {COLORS} from '../../themes';
import {UserContext} from '../../../Store/context/UserContext';

const PasswordSuggetion = ({suggetionTxt, minState}) => {
  const {password} = useContext(UserContext);

  const txtColor = minState ? COLORS.success : COLORS.error;
  const minStateName = minState ? 'circleCross' : 'circleCheck';
  const minStateTxtColor = password === '' ? null : txtColor;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        opacity: password === '' ? 0.3 : 1,
      }}>
      {password === '' ? (
        <View
          style={{
            height: 18,
            width: 18,
            borderRadius: 9,
            borderWidth: 1.5,
            borderColor: COLORS.border_Light,
          }}
        />
      ) : (
        <AppIcon name={minStateName} size={18} />
      )}
      <Text
        style={{
          marginLeft: 2,
          fontSize: 10,
          fontWeight: '400',
          color: minStateTxtColor,
        }}>
        {suggetionTxt}
      </Text>
    </View>
  );
};

export default PasswordSuggetion;

const styles = StyleSheet.create({});
