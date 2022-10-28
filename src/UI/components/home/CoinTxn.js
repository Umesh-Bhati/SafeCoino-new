import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../themes';

const CoinTxn = ({
  onPress,
  data,
  titleTxt2,
  IRT,
  editable,
  onChangeText,
  value,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 34,
        width: '100%',
      }}  
      >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }} 
         >
        <Text
          style={{
            marginLeft: 15,
            marginBottom: 7,
            fontSize: 14,
            fontWeight: '400',
            color: COLORS.secTxt_Light,
          }}>
          Coin
        </Text>
        <TouchableOpacity
          disabled={IRT}
          style={{
            height: 48,
            width: '100%',
            borderRadius: 5,
            borderColor: COLORS.BORDER_COLOR,
            alignItems: 'center',
            borderWidth: 0.5,
            flexDirection: 'row',
            backgroundColor: IRT ? COLORS.txtField_Light : 'transparent',
            justifyContent: IRT && 'center',
          }}
          
          onPress={onPress}>
          {IRT ||
            (data && (
              <Image
                source={{uri: data.image}}
                style={{
                  marginLeft: 9,
                  height: 25,
                  width: 25,
                }}
              />
            ))}
          {
            <Text
              style={{
                marginLeft: 8,
                textTransform: 'uppercase',
                fontWeight: '500',
                fontSize: 16,
                color: COLORS.secTxt_Light,
              }}>
              {IRT ? 'IRT' : data?.symbol}
            </Text>
          }

          {IRT || (
            <Icon
              name="down"
              color={COLORS.secTxt_Light}
              style={{position: 'absolute', right: 20}}
            />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 1.5,
        }}>
        <Text
          style={{
            marginLeft: 30,
            marginBottom: 7,
            fontSize: 14,
            fontWeight: '400',
            color: COLORS.secTxt_Light,
          }}>
          {titleTxt2}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.border_Dark,
            borderWidth: 0.5,
            marginLeft: 7,
            borderRadius: 5,
          }} 
          pointerEvents = {editable ? 'auto' : 'none'} >
          <TextInput
            style={{
              height: 48,
              borderRadius: 5,
              flex: 1,
              paddingLeft: 16,
              color: "black",
              fontSize: 16,
              fontWeight: '400'
            }}
            
            keyboardType="decimal-pad"
            value={value}
            onChangeText={onChangeText}
          />
          <Text
            style={{
              marginRight: 16,
              textTransform: 'uppercase',
              fontWeight: '300',
              fontSize: 14,
              color: COLORS.secTxt_Light,
            }}>
            {IRT ? 'IRT' : data?.symbol}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinTxn;
