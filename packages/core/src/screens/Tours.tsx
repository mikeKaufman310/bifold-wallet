import React from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, StyleSheet, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { DispatchAction } from '../contexts/reducers/store'
import { useStore } from '../contexts/store'
import { useTheme } from '../contexts/theme'
import { ThemedText } from '../components/texts/ThemedText'

interface Option {
  value: string
  bool: boolean
}

const Tours: React.FC = () => {
  const [store, dispatch] = useStore()
  const { t } = useTranslation()
  const { ColorPalette, SettingsTheme } = useTheme()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ColorPalette.brand.primaryBackground,
      width: '100%',
    },
    section: {
      backgroundColor: SettingsTheme.groupBackground,
      paddingHorizontal: 25,
      paddingVertical: 16,
    },
    sectionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: ColorPalette.brand.primaryBackground,
      marginHorizontal: 25,
    },
  })

  const options = [
    { value: t('Global.On'), bool: true },
    { value: t('Global.Off'), bool: false },
  ]

  const handleSettingChange = async (enableTours: boolean) => {
    dispatch({
      type: DispatchAction.ENABLE_TOURS,
      payload: [enableTours],
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={options}
        renderItem={({ item: option }) => {
          const { value, bool }: Option = option
          return (
            <View style={[styles.section, styles.sectionRow]}>
              <ThemedText variant="title" accessibilityRole="header">
                {value}
              </ThemedText>
              <BouncyCheckbox
                accessibilityLabel={value}
                disableText
                fillColor="#FFFFFFFF"
                unfillColor="#FFFFFFFF"
                size={36}
                innerIconStyle={{ borderColor: ColorPalette.brand.primary, borderWidth: 2 }}
                ImageComponent={() => <Icon name="circle" size={18} color={ColorPalette.brand.primary}></Icon>}
                onPress={async () => await handleSettingChange(bool)}
                isChecked={store.tours.enableTours === bool}
                disableBuiltInState
              />
            </View>
          )
        }}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: SettingsTheme.groupBackground }}>
            <View style={styles.itemSeparator}></View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Tours
