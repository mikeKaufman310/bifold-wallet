import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useTheme } from '../../contexts/theme'
import { GenericFn } from '../../types/fn'
import { testIdWithKey } from '../../utils/testable'
import { ThemedText } from '../texts/ThemedText'

interface CredentialActionFooterProps {
  onPress: GenericFn
  text: string
  testID: string
  textColor?: string
}

const CredentialActionFooter = ({ onPress, text, testID, textColor }: CredentialActionFooterProps) => {
  const { ColorPalette, TextTheme } = useTheme()
  const styles = StyleSheet.create({
    seperator: {
      width: '100%',
      height: 2,
      marginVertical: 10,
      backgroundColor: ColorPalette.grayscale.lightGrey,
    },
    touchable: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    credActionText: {
      fontSize: 20,
      fontWeight: TextTheme.bold.fontWeight,
      color: textColor ?? ColorPalette.brand.link,
    },
  })

  return (
    <View>
      <View style={styles.seperator}></View>
      <View>
        <TouchableOpacity onPress={onPress} testID={testIdWithKey(testID)} style={styles.touchable}>
          <ThemedText style={styles.credActionText}>{text}</ThemedText>
          <Icon
            style={[styles.credActionText, { fontSize: styles.credActionText.fontSize + 5 }]}
            name="chevron-right"
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CredentialActionFooter
