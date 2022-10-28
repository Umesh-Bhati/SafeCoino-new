import React, {useRef, useState} from 'react';
import {TouchableOpacity, Text, View, Image, Animated} from 'react-native';
import { COLORS } from '../../themes';
import Icon from 'react-native-vector-icons/AntDesign';


const PerformaInvoice = ({customContainerStyle}) => {
  const [showContent, setShowContent] = useState(true);

  const scaleY = useRef(new Animated.Value(0)).current

  const DummyData = [
    {
      txt: 'Your account balance',
      count: '12,000,000 IRT',
    },
    {
      txt: 'Price',
      count: '12,000,000 IRT',
    },
    {
      txt: 'Transaction Fee',
      count: '12,000,000 IRT',
    },
    {
      txt: 'Received Amount',
      count: '12,000,000 IRT',
    },
    {
      txt: 'Payable Amount',
      count: '12,000,000 IRT',
    },
  ];

  let RenderDetails = ({txt, count}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          width: '100%',
        }}>
        <Text
          style={{
            color: '#E5E5E8',
            textAlign: 'left',
            fontFamily: 'Roboto-Light',
          }}>
          {txt}:
        </Text>
        <Text
          style={{
            color: COLORS.priTxt_Dark,
            textAlign: 'right',
          }}>
          {count}
        </Text>
      </View>
    );
  };

  return (
    <Animated.View
      style={{
        width: '100%',
        marginTop: 24,
        backgroundColor: COLORS.info,
        borderRadius: 17,
        paddingVertical: 26,
        paddingHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          {scaleY: 1}
        ]
        // ...customContainerStyle,
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPressOut={() => {
          setShowContent(!showContent);
          Animated.timing(scaleY, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true
          }).start()
        }}>
        <Text
          style={{
            color: COLORS.priTxt_Dark,
            fontSize: 18,
            fontWeight: '500',
          }}>
          Performa Invoice
        </Text>
        <Icon
          name={showContent ? 'up' : 'down'}
          color={COLORS.priTxt_Dark}
          size={16}
          style={{
            position: 'absolute',
            right: 10,
            alignSelf: 'center'
          }}
        />
        
      </TouchableOpacity>

      {/* renderDetails */}

      {showContent &&
        DummyData.map((item, key) => (
          <RenderDetails txt={item.txt} count={item.count} key={key} />
        ))}
    </Animated.View>
  );
};

export default PerformaInvoice;
