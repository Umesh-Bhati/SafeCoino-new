import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcon from './AppIcon'
import { COLORS } from '../../themes'

const WarningMsg = ({msg, customContainerStyle}) => {
  return (
    <View style={[styles.container, customContainerStyle]} >
    <AppIcon name={'danger'} size={24} color={COLORS.error}  />
      <Text style={styles.txt} >{msg}</Text>
    </View>
  )
}

export default WarningMsg

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
    },
    txt: {
        marginLeft: 10,
        color: "#191919",
        fontWeight: '300',
        fontSize: 12
    }
})