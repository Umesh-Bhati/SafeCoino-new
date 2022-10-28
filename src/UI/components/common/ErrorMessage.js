import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes'

const ErrorMessage = ({style, errorMsg}) => {
  return (
    
      <Text style={{
        color: COLORS.error,
        fontWeight: '400',
        fontSize: 12,
        marginLeft: 15,
        marginTop: 8,
        fontFamily: 'Roboto',
        ...style
      }} >{errorMsg}</Text>
    
  )
}

export default ErrorMessage

const styles = StyleSheet.create({})