import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/AntDesign';

//Local
import {COLORS} from '../../themes';
import ErrorMessage from '../common/ErrorMessage';

const FormInput = ({
  onIconPress,
  placeholder,
  placeholderTextColor = "gray" ,
  keyboardType,
  icon,
  title,
  textContentType,
  errorMsg,
  customInputContainer,
  onChangeText,
  value,
  secureTxt,
  errorMsgStyle,
  arrowIcon,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {color: errorMsg ? COLORS.error : COLORS.secTxt_Light},
        ]}>
        {title}
      </Text>
      <View
        style={[
          styles.inputContainer,
          customInputContainer,
          {
            borderColor: errorMsg ? COLORS.error : COLORS.border_Light,
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={secureTxt}
          style={[
            styles.textInput,
            {color: errorMsg ? COLORS.error : COLORS.secTxt_Light},
          ]}
          onChangeText={onChangeText}
          value={value}
          textContentType={textContentType}
        />
        {icon && (
          <TouchableOpacity
            style={styles.touchable}
            onPress={onIconPress}
            activeOpacity={0.7}>
            {arrowIcon ? (
              <ArrowIcon
                name="down"
                color={errorMsg ? COLORS.error : COLORS.priTxt_Light}
                size={16}
              />
            ) : (
              <Icon
                name={secureTxt ? 'eye' : 'eye-off'}
                color={errorMsg ? COLORS.error : COLORS.priTxt_Light}
                size={20}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorMsg && <ErrorMessage errorMsg={errorMsg} style={errorMsgStyle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 16,
    marginLeft: 15,
    marginBottom: 15,
    color: COLORS.secTxt_Light,
  },
  textInput: {flex: 5},
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default FormInput;
