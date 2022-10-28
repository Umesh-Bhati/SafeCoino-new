import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

const Trade = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.priTxt_Dark
    }}  >
      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
      }} >Coming soon...</Text>
    </View>
  )
}

export default Trade

const styles = StyleSheet.create({})