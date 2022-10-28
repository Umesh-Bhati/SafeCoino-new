import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../themes';
import AppIcon from '../common/AppIcon';
import AppButton from '../common/AppButton';

const CanclePopup = ({visible, btn1Press, btn2Press, iconPress}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      style={{
        justifyContent: 'center',
      }}
      animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            borderRadius: 10,
            backgroundColor: COLORS.txtField_Light,
            alignSelf: 'center',
            zIndex: 999,
            position: 'absolute',
            alignItems: 'center',
            padding: 20,
          }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
            }}
            onPress={iconPress}>
            <AppIcon name={'cross'} size={25} />
          </TouchableOpacity>
          <AppIcon name={'dangerInfo'} size={25} color={COLORS.error} />
          <Text
            style={{
              color: COLORS.error,
              marginVertical: 15,
            }}>
            Cancle Request
          </Text>

          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: COLORS.secTxt_Dark,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 20,
              color: 'black',
              fontWeight: '300',
              fontSize: 14
            }}>
            {'Are you sure you want to cancel your sales\nrequest?'}{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <AppButton
              title={'No'}
              customContainerStyle={{
                backgroundColor: 'transparent',
                width: '40%',
                borderWidth: 1,
              }}
              titleStyle={{
                color: COLORS.secTxt_Light,
              }}
              onPress={btn1Press}
            />
            <AppButton
              title={'Yes'}
              customContainerStyle={{
                backgroundColor: COLORS.error,
                width: '40%',
                marginLeft: '10%',
              }}
              onPress={btn2Press}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CanclePopup;

const styles = StyleSheet.create({});
