import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {images} from '../../assets';

const {width, height} = Dimensions.get("window")

const AuthLapyImg = () => {
  return (
    <View style={styles.container}>
      <Image source={images.authLapyImg2x} style={styles.img} />
    </View>
  );
};

export default AuthLapyImg;

const styles = StyleSheet.create({
  container: {
    height: height/3,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
});
