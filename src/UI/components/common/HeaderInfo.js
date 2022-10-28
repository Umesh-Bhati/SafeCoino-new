import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppIcon from './AppIcon';

const HeaderInfo = ({title, subTitle, mailIconPress, mailIcon, children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      {mailIcon && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
          }}
          onPress={mailIconPress}>
          <AppIcon name={'mailBox'} size={25} />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 29,
    color: '#495057',
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    color: '#495057',
  },
});
