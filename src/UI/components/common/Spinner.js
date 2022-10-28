import React from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';

const {height, width} = Dimensions.get('window');

const Spinner = props => {
  renderSpinnerView = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height,
          width,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          position: 'absolute',
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </View>
    );
  };

  return props.visible && renderSpinnerView();
};

export default Spinner;
