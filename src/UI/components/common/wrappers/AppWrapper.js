import {
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Modal,
  View,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderInfo from '../HeaderInfo';
import {COLORS} from '../../../themes';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppIcon from '../AppIcon';
import AppButton from '../AppButton';

const AppWrapper = ({
  onPress,
  children,
  headerShown,
  title,
  subTitle,
  onBackPress,
  mailIcon,
  customScrollContainer,
  mailIconPress,
  profileIcon,
}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, customScrollContainer]}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        {headerShown ? (
          <Icon
            name="left"
            color={'#323232'}
            size={20}
            onPress={onBackPress}
            style={styles.icon}
          />
        ) : (
          profileIcon && (
            <TouchableOpacity
              style={{
                width: 26,
                height: 26,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '86%',
              }}>
              <AppIcon
                name={'profile'}
                size={26}
                style={{}}
                color={COLORS.iconColor}
              />
            </TouchableOpacity>
          )
        )}
        <HeaderInfo
          title={title}
          subTitle={subTitle}
          mailIcon={mailIcon}
          mailIconPress={mailIconPress}
        />

        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.bg_Light,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  icon: {
    paddingVertical: 10,
  },
});
