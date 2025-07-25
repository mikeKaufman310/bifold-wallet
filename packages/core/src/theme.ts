import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

import Arrow from './assets/icons/large-arrow.svg'
import IconDelete from './assets/icons/trash.svg'
import IconEdit from './assets/icons/pencil.svg'
import IconCode from './assets/icons/code.svg'
import ActivityIndicator from './assets/img/activity-indicator-circle.svg'
import AppLockout from './assets/img/app-lockout.svg'
import Biometrics from './assets/img/biometrics.svg'
import ContactBook from './assets/img/contact-book.svg'
import CredentialDeclined from './assets/img/credential-declined.svg'
import DeleteNotification from './assets/img/delete-notification.svg'
import EmptyWallet from './assets/img/empty-wallet.svg'
import IconCredentialOfferDark from './assets/img/icon-credential-offer-dark.svg'
import IconCredentialOfferLight from './assets/img/icon-credential-offer-light.svg'
import IconInfoRecievedDark from './assets/img/icon-info-recieved-dark.svg'
import IconInfoRecievedLight from './assets/img/icon-info-recieved-light.svg'
import IconInfoSentDark from './assets/img/icon-info-sent-dark.svg'
import IconInfoSentLight from './assets/img/icon-info-sent-light.svg'
import IconProofRequestDark from './assets/img/icon-proof-request-dark.svg'
import IconProofRequestLight from './assets/img/icon-proof-request-light.svg'
import Logo from './assets/img/logo.svg'
import NoInfoShared from './assets/img/no_information_shared.svg'
import Preface from './assets/img/preface.svg'
import UpdateAvailable from './assets/img/update-available.svg'
import ProofRequestDeclined from './assets/img/proof-declined.svg'
import VerifierRequestDeclined from './assets/img/verifier-request-declined.svg'
import Wallet from './assets/img/wallet.svg'
import CheckInCircle from './assets/img/check-in-circle.svg'
import CredentialCard from './assets/img/credential-card.svg'
import WalletBack from './assets/img/wallet-back.svg'
import WalletFront from './assets/img/wallet-front.svg'
import CredentialInHand from './assets/img/credential-in-hand.svg'
import CredentialList from './assets/img/credential-list.svg'
import ScanShare from './assets/img/scan-share.svg'
import SecureCheck from './assets/img/secure-check.svg'
import SecureImage from './assets/img/secure-image.svg'
import InformationReceived from './assets/img/information-received.svg'
import PushNotificationImg from './assets/img/push-notifications.svg'
import ChatLoading from './assets/img/chat-loading.svg'
import HistoryCardAcceptedIcon from './assets/img/HistoryCardAcceptedIcon.svg'
import HistoryCardExpiredIcon from './assets/img/HistoryCardExpiredIcon.svg'
import HistoryCardRevokedIcon from './assets/img/HistoryCardRevokedIcon.svg'
import HistoryInformationSentIcon from './assets/img/HistoryInformationSentIcon.svg'
import HistoryPinUpdatedIcon from './assets/img/HistoryPinUpdatedIcon.svg'
import IconChevronRight from './assets/img/IconChevronRight.svg'
import HomeCenterImg from './assets/img/home-center-img.svg'
import IconWarning from './assets/img/exclamation-mark.svg'
import IconError from './assets/img/error-filled.svg'
import TabOneFocusedIcon from './assets/img/message-text-icon.svg'
import TabOneIcon from './assets/img/message-text-icon-outline.svg'
import TabTwoIcon from './assets/img/qrcode-scan-icon.svg'
import TabThreeFocusedIcon from './assets/img/wallet-icon.svg'
import TabThreeIcon from './assets/img/wallet-icon-outline.svg'
import React from 'react'

export interface ISVGAssets {
  activityIndicator: React.FC<SvgProps>
  appLockout: React.FC<SvgProps>
  biometrics: React.FC<SvgProps>
  contactBook: React.FC<SvgProps>
  credentialDeclined: React.FC<SvgProps>
  deleteNotification: React.FC<SvgProps>
  emptyWallet: React.FC<SvgProps>
  logo: React.FC<SvgProps>
  proofRequestDeclined: React.FC<SvgProps>
  arrow: React.FC<SvgProps>
  iconCredentialOfferDark: React.FC<SvgProps>
  iconCredentialOfferLight: React.FC<SvgProps>
  iconInfoRecievedDark: React.FC<SvgProps>
  iconInfoRecievedLight: React.FC<SvgProps>
  iconInfoSentDark: React.FC<SvgProps>
  iconInfoSentLight: React.FC<SvgProps>
  iconProofRequestDark: React.FC<SvgProps>
  iconProofRequestLight: React.FC<SvgProps>
  preface: React.FC<SvgProps>
  updateAvailable: React.FC<SvgProps>
  verifierRequestDeclined: React.FC<SvgProps>
  noInfoShared: React.FC<SvgProps>
  wallet: React.FC<SvgProps>
  checkInCircle: React.FC<SvgProps>
  credentialCard: React.FC<SvgProps>
  walletBack: React.FC<SvgProps>
  walletFront: React.FC<SvgProps>
  credentialInHand: React.FC<SvgProps>
  credentialList: React.FC<SvgProps>
  scanShare: React.FC<SvgProps>
  secureCheck: React.FC<SvgProps>
  secureImage: React.FC<SvgProps>
  informationReceived: React.FC<SvgProps>
  pushNotificationImg: React.FC<SvgProps>
  chatLoading: React.FC<SvgProps>
  historyCardAcceptedIcon: React.FC<SvgProps>
  historyCardDeclinedIcon: React.FC<SvgProps>
  historyCardExpiredIcon: React.FC<SvgProps>
  historyCardRemovedIcon: React.FC<SvgProps>
  historyCardRevokedIcon: React.FC<SvgProps>
  historyCardUpdatesIcon: React.FC<SvgProps>
  historyPinUpdatedIcon: React.FC<SvgProps>
  historyInformationSentIcon: React.FC<SvgProps>
  historyInformationNotSentIcon: React.FC<SvgProps>
  historyConnectionIcon: React.FC<SvgProps>
  historyConnectionRemovedIcon: React.FC<SvgProps>
  historyActivateBiometryIcon: React.FC<SvgProps>
  historyDeactivateBiometryIcon: React.FC<SvgProps>
  iconChevronRight: React.FC<SvgProps>
  homeCenterImg: React.FC<SvgProps>
  iconDelete: React.FC<SvgProps>
  iconEdit: React.FC<SvgProps>
  iconWarning: React.FC<SvgProps>
  iconError: React.FC<SvgProps>
  iconCode: React.FC<SvgProps>
  tabOneIcon: React.FC<SvgProps>
  tabOneFocusedIcon: React.FC<SvgProps>
  tabTwoIcon: React.FC<SvgProps>
  tabThreeIcon: React.FC<SvgProps>
  tabThreeFocusedIcon: React.FC<SvgProps>
}

export interface ISpacing {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface IFontAttributes {
  fontFamily?: string
  fontStyle?: 'normal' | 'italic'
  fontSize: number
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  color: string
  lineHeight?: number
}

export interface IInputAttributes {
  padding?: number
  borderRadius?: number
  fontSize?: number
  backgroundColor?: string
  color?: string
  borderWidth?: number
  borderColor?: string
}

export interface IInlineInputMessage {
  inlineErrorText: IFontAttributes
  InlineErrorIcon: React.FC<SvgProps>
  inlineWarningText: IFontAttributes
  InlineWarningIcon: React.FC<SvgProps>
}

export interface IInputs {
  label: IFontAttributes
  textInput: IInputAttributes
  inputSelected: IInputAttributes
  singleSelect: IInputAttributes
  singleSelectText: IFontAttributes
  singleSelectIcon: IInputAttributes
  checkBoxColor: IInputAttributes
  checkBoxText: IFontAttributes
}

export interface ITextTheme {
  headingOne: IFontAttributes
  headingTwo: IFontAttributes
  headingThree: IFontAttributes
  headingFour: IFontAttributes
  normal: IFontAttributes
  bold: IFontAttributes
  label: IFontAttributes
  labelTitle: IFontAttributes
  labelSubtitle: IFontAttributes
  labelText: IFontAttributes
  caption: IFontAttributes
  title: IFontAttributes
  headerTitle: IFontAttributes
  modalNormal: IFontAttributes
  modalTitle: IFontAttributes
  popupModalText: IFontAttributes
  modalHeadingOne: IFontAttributes
  modalHeadingThree: IFontAttributes
  settingsText: IFontAttributes
  inlineErrorText: IFontAttributes
  inlineWarningText: IFontAttributes
}

export interface IBrandColors {
  primary: string
  primaryDisabled: string
  secondary: string
  secondaryDisabled: string
  tertiary: string
  tertiaryDisabled: string
  primaryLight: string
  highlight: string
  primaryBackground: string
  secondaryBackground: string
  tertiaryBackground: string
  modalPrimary: string
  modalSecondary: string
  modalTertiary: string
  modalPrimaryBackground: string
  modalSecondaryBackground: string
  modalTertiaryBackground: string
  modalIcon: string
  link: string
  text: string
  icon: string
  headerText: string
  headerIcon: string
  buttonText: string
  tabBarInactive: string
  unorderedList: string
  unorderedListModal: string
  inlineError: string
  inlineWarning: string
}

export interface ISemanticColors {
  error: string
  success: string
  focus: string
}

export interface INotificationColors {
  success: string
  successBorder: string
  successIcon: string
  successText: string
  info: string
  infoBorder: string
  infoIcon: string
  infoText: string
  warn: string
  warnBorder: string
  warnIcon: string
  warnText: string
  error: string
  errorBorder: string
  errorIcon: string
  errorText: string
  popupOverlay: string
}

export interface IGrayscaleColors {
  black: string
  darkGrey: string
  mediumGrey: string
  lightGrey: string
  veryLightGrey: string
  white: string
}

export interface IErrorColors {
  error: string
  warning: string
}

export interface IColorPalette {
  brand: IBrandColors
  semantic: ISemanticColors
  notification: INotificationColors
  grayscale: IGrayscaleColors
}

export interface IAssets {
  svg: ISVGAssets
  img: {
    logoPrimary: any
    logoSecondary: any
  }
}

export const borderRadius = 4
export const heavyOpacity = 0.7
export const mediumOpacity = 0.5
export const lightOpacity = 0.35
export const zeroOpacity = 0.0
export const borderWidth = 2
export const maxFontSizeMultiplier = 2

const Spacing: ISpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
}

const GrayscaleColors: IGrayscaleColors = {
  black: '#000000',
  darkGrey: '#313132',
  mediumGrey: '#606060',
  lightGrey: '#D3D3D3',
  veryLightGrey: '#F2F2F2',
  white: '#FFFFFF',
}

const InlineErrorMessageColors: IErrorColors = {
  error: '#ff0000',
  warning: '#ff9000',
}

const BrandColors: IBrandColors = {
  primary: '#42803E',
  primaryDisabled: `rgba(53, 130, 63, ${lightOpacity})`,
  secondary: '#FFFFFFFF',
  secondaryDisabled: `rgba(53, 130, 63, ${heavyOpacity})`,
  tertiary: '#FFFFFFFF',
  tertiaryDisabled: `rgba(53, 130, 63, ${heavyOpacity})`,
  primaryLight: `rgba(53, 130, 63, ${lightOpacity})`,
  highlight: '#FCBA19',
  primaryBackground: '#000000',
  secondaryBackground: '#313132',
  tertiaryBackground: '#313132',
  modalPrimary: '#42803E',
  modalSecondary: '#FFFFFFFF',
  modalTertiary: '#FFFFFFFF',
  modalPrimaryBackground: '#000000',
  modalSecondaryBackground: '#313132',
  modalTertiaryBackground: '#313132',
  modalIcon: GrayscaleColors.white,
  unorderedList: GrayscaleColors.white,
  unorderedListModal: GrayscaleColors.white,
  link: '#42803E',
  text: GrayscaleColors.white,
  icon: GrayscaleColors.white,
  headerIcon: GrayscaleColors.white,
  headerText: GrayscaleColors.white,
  buttonText: GrayscaleColors.white,
  tabBarInactive: GrayscaleColors.white,
  inlineError: InlineErrorMessageColors.error,
  inlineWarning: InlineErrorMessageColors.warning,
}

const SemanticColors: ISemanticColors = {
  error: '#D8292F',
  success: '#2E8540',
  focus: '#3399FF',
}

const NotificationColors: INotificationColors = {
  success: '#313132',
  successBorder: '#2E8540',
  successIcon: '#2E8540',
  successText: '#FFFFFF',
  info: '#313132',
  infoBorder: '#0099FF',
  infoIcon: '#0099FF',
  infoText: '#FFFFFF',
  warn: '#313132',
  warnBorder: '#FCBA19',
  warnIcon: '#FCBA19',
  warnText: '#FFFFFF',
  error: '#313132',
  errorBorder: '#D8292F',
  errorIcon: '#D8292F',
  errorText: '#FFFFFF',
  popupOverlay: `rgba(0, 0, 0, ${mediumOpacity})`,
}

export const ColorPalette: IColorPalette = {
  brand: BrandColors,
  semantic: SemanticColors,
  notification: NotificationColors,
  grayscale: GrayscaleColors,
}

export const TextTheme: ITextTheme = {
  headingOne: {
    fontSize: 38,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  headingTwo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  headingThree: {
    fontSize: 26,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  headingFour: {
    fontSize: 21,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  normal: {
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPalette.brand.text,
  },
  bold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  labelSubtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPalette.brand.text,
  },
  labelText: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: ColorPalette.brand.text,
  },
  caption: {
    fontSize: 14,
    fontWeight: 'normal',
    color: ColorPalette.brand.text,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorPalette.brand.text,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: ColorPalette.brand.headerText,
  },
  modalNormal: {
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPalette.grayscale.white,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: ColorPalette.grayscale.white,
  },
  modalHeadingOne: {
    fontSize: 38,
    fontWeight: 'bold',
    color: ColorPalette.grayscale.white,
  },
  modalHeadingThree: {
    fontSize: 26,
    fontWeight: 'bold',
    color: ColorPalette.grayscale.white,
  },
  popupModalText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: ColorPalette.grayscale.white,
  },
  settingsText: {
    fontSize: 21,
    fontWeight: 'normal',
    color: ColorPalette.brand.text,
  },
  inlineErrorText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: ColorPalette.brand.inlineError,
  },
  inlineWarningText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: ColorPalette.brand.inlineWarning,
  },
}

export const Inputs: IInputs = StyleSheet.create({
  label: {
    ...TextTheme.label,
  },
  textInput: {
    padding: 10,
    borderRadius,
    fontSize: 16,
    backgroundColor: ColorPalette.brand.primaryBackground,
    color: ColorPalette.notification.infoText,
    borderWidth: 2,
    borderColor: ColorPalette.brand.secondary,
  },
  inputSelected: {
    borderColor: ColorPalette.brand.primary,
  },
  singleSelect: {
    padding: 12,
    borderRadius: borderRadius * 2,
    backgroundColor: ColorPalette.brand.secondaryBackground,
  },
  singleSelectText: {
    ...TextTheme.normal,
  },
  singleSelectIcon: {
    color: ColorPalette.grayscale.white,
  },
  checkBoxColor: {
    color: ColorPalette.brand.primary,
  },
  checkBoxText: {
    ...TextTheme.normal,
  },
})

export const Buttons = StyleSheet.create({
  critical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primary,
  },
  criticalText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  criticalTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  primary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primary,
  },
  primaryDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primaryDisabled,
  },
  primaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  primaryTextDisabled: {
    ...TextTheme.bold,
    textAlign: 'center',
  },
  secondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPalette.brand.primary,
  },
  secondaryDisabled: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPalette.brand.secondaryDisabled,
  },
  secondaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.primary,
    textAlign: 'center',
  },
  secondaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.secondaryDisabled,
    textAlign: 'center',
  },
  tertiary: {
    padding: 16,
  },
  tertiaryDisabled: {
    padding: 16,
  },
  tertiaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.primary,
    textAlign: 'center',
  },
  tertiaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.tertiaryDisabled,
    textAlign: 'center',
  },
  modalCritical: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primary,
  },
  modalCriticalDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primaryDisabled,
  },
  modalCriticalText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  modalCriticalTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  modalPrimary: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.modalPrimary,
  },
  modalPrimaryDisabled: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: ColorPalette.brand.primaryDisabled,
  },
  modalPrimaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  modalPrimaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.buttonText,
    textAlign: 'center',
  },
  modalSecondary: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPalette.brand.modalPrimary,
  },
  modalSecondaryDisabled: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: ColorPalette.brand.secondaryDisabled,
  },
  modalSecondaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.modalPrimary,
    textAlign: 'center',
  },
  modalSecondaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.secondaryDisabled,
    textAlign: 'center',
  },
  modalTertiary: {
    padding: 16,
  },
  modalTertiaryDisabled: {
    padding: 16,
  },
  modalTertiaryText: {
    ...TextTheme.bold,
    color: ColorPalette.brand.modalPrimary,
    textAlign: 'center',
  },
  modalTertiaryTextDisabled: {
    ...TextTheme.bold,
    color: ColorPalette.brand.tertiaryDisabled,
    textAlign: 'center',
  },
})

export const ListItems = StyleSheet.create({
  credentialBackground: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
  },
  credentialTitle: {
    ...TextTheme.headingFour,
  },
  credentialDetails: {
    ...TextTheme.caption,
  },
  credentialOfferBackground: {
    backgroundColor: ColorPalette.brand.modalPrimaryBackground,
  },
  credentialOfferTitle: {
    ...TextTheme.modalHeadingThree,
    fontWeight: 'normal',
  },
  credentialOfferDetails: {
    ...TextTheme.normal,
  },
  revoked: {
    backgroundColor: ColorPalette.notification.error,
    borderColor: ColorPalette.notification.errorBorder,
  },
  contactBackground: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
  },
  credentialIconColor: {
    color: ColorPalette.notification.infoText,
  },
  contactTitle: {
    color: ColorPalette.brand.text,
  },
  contactDate: {
    color: ColorPalette.brand.text,
    marginTop: 10,
  },
  contactIconBackground: {
    backgroundColor: ColorPalette.brand.primary,
  },
  contactIcon: {
    color: ColorPalette.grayscale.white,
  },
  recordAttributeLabel: {
    ...TextTheme.bold,
  },
  recordContainer: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
  },
  recordBorder: {
    borderBottomColor: ColorPalette.brand.primaryBackground,
  },
  recordLink: {
    color: ColorPalette.brand.link,
  },
  recordAttributeText: {
    ...TextTheme.normal,
  },
  proofIcon: {
    ...TextTheme.headingOne,
  },
  proofError: {
    color: ColorPalette.semantic.error,
  },
  avatarText: {
    ...TextTheme.headingTwo,
    fontWeight: 'normal',
  },
  avatarCircle: {
    borderRadius: TextTheme.headingTwo.fontSize,
    borderColor: TextTheme.headingTwo.color,
    width: TextTheme.headingTwo.fontSize * 2,
    height: TextTheme.headingTwo.fontSize * 2,
  },
  emptyList: {
    ...TextTheme.normal,
  },
  requestTemplateBackground: {
    backgroundColor: ColorPalette.grayscale.white,
  },
  requestTemplateIconColor: {
    color: ColorPalette.notification.infoText,
  },
  requestTemplateTitle: {
    color: ColorPalette.grayscale.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  requestTemplateDetails: {
    color: ColorPalette.grayscale.black,
    fontWeight: 'normal',
    fontSize: 16,
  },
  requestTemplateZkpLabel: {
    color: ColorPalette.grayscale.mediumGrey,
    fontSize: 12,
  },
  requestTemplateIcon: {
    color: ColorPalette.grayscale.black,
    fontSize: 36,
  },
  requestTemplateDate: {
    color: ColorPalette.grayscale.mediumGrey,
    fontSize: 10,
  },
})

export interface ITabTheme {
  tabBarStyle: ViewStyle & {
    height: number
    backgroundColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowRadius: number
    shadowColor: string
    shadowOpacity: number
    borderTopWidth: number
    paddingBottom: number
  }
  tabBarContainerStyle: ViewStyle
  tabBarActiveTintColor: string
  tabBarInactiveTintColor: string
  tabBarTextStyle: TextStyle & {
    fontSize: number
  }
  tabBarButtonIconStyle: {
    color: string
  }
  focusTabIconStyle: ViewStyle
  focusTabActiveTintColor: {
    backgroundColor: string
  }
  tabBarSecondaryBackgroundColor: string
}

export const TabTheme: ITabTheme = {
  tabBarStyle: {
    height: 60,
    backgroundColor: ColorPalette.brand.secondaryBackground,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 6,
    shadowColor: ColorPalette.grayscale.black,
    shadowOpacity: 0.1,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  tabBarContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarActiveTintColor: ColorPalette.brand.primary,
  tabBarInactiveTintColor: ColorPalette.brand.tabBarInactive,
  tabBarTextStyle: {
    ...TextTheme.labelSubtitle,
    paddingBottom: 5,
  },
  tabBarButtonIconStyle: {
    color: ColorPalette.brand.headerIcon,
  },
  focusTabIconStyle: {
    height: 60,
    width: 60,
    backgroundColor: ColorPalette.brand.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTabActiveTintColor: {
    backgroundColor: ColorPalette.brand.secondary,
  },
  tabBarSecondaryBackgroundColor: ColorPalette.brand.secondaryBackground,
}

export const NavigationTheme = {
  dark: true,
  colors: {
    primary: ColorPalette.brand.primary,
    background: ColorPalette.brand.primaryBackground,
    card: ColorPalette.brand.primary,
    text: ColorPalette.grayscale.white,
    border: ColorPalette.grayscale.white,
    notification: ColorPalette.grayscale.white,
  },
}

export const HomeTheme = StyleSheet.create({
  welcomeHeader: {
    ...TextTheme.headingOne,
  },
  credentialMsg: {
    ...TextTheme.normal,
  },
  notificationsHeader: {
    ...TextTheme.headingThree,
  },
  noNewUpdatesText: {
    ...TextTheme.normal,
    color: ColorPalette.notification.infoText,
  },
  link: {
    ...TextTheme.normal,
    color: ColorPalette.brand.link,
  },
})

export const SettingsTheme = {
  groupHeader: {
    ...TextTheme.normal,
    marginBottom: 8,
  },
  groupBackground: ColorPalette.brand.secondaryBackground,
  iconColor: TextTheme.normal.color,
  text: {
    ...TextTheme.caption,
    color: ColorPalette.grayscale.white,
  },
}

export const ChatTheme = {
  containerStyle: {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
  },
  leftBubble: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
    borderRadius: 4,
    padding: 16,
    marginLeft: 16,
  },
  rightBubble: {
    backgroundColor: ColorPalette.brand.primaryLight,
    borderRadius: 4,
    padding: 16,
    marginRight: 16,
  },
  timeStyleLeft: {
    color: ColorPalette.grayscale.lightGrey,
    fontSize: 12,
    marginTop: 8,
  },
  timeStyleRight: {
    color: ColorPalette.grayscale.lightGrey,
    fontSize: 12,
    marginTop: 8,
  },
  leftText: {
    color: ColorPalette.brand.secondary,
    fontSize: TextTheme.normal.fontSize,
  },
  leftTextHighlighted: {
    ...TextTheme.bold,
    color: ColorPalette.brand.secondary,
  },
  rightText: {
    color: ColorPalette.brand.secondary,
    fontSize: TextTheme.normal.fontSize,
  },
  rightTextHighlighted: {
    ...TextTheme.bold,
    color: ColorPalette.brand.secondary,
  },
  inputToolbar: {
    backgroundColor: ColorPalette.brand.secondary,
    shadowColor: ColorPalette.brand.primaryDisabled,
    borderRadius: 10,
  },
  inputText: {
    lineHeight: undefined,
    fontWeight: '500',
    fontSize: TextTheme.normal.fontSize,
  },
  placeholderText: ColorPalette.grayscale.lightGrey,
  sendContainer: {
    marginBottom: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  sendEnabled: ColorPalette.brand.primary,
  sendDisabled: ColorPalette.brand.primaryDisabled,
  options: ColorPalette.brand.primary,
  optionsText: ColorPalette.grayscale.black,
  openButtonStyle: {
    borderRadius: 32,
    backgroundColor: ColorPalette.brand.primary,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
  },
  openButtonTextStyle: {
    fontSize: TextTheme.normal.fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  documentIconContainer: {
    backgroundColor: ColorPalette.brand.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  documentIcon: {
    color: ColorPalette.grayscale.white,
  },
}

export const OnboardingTheme = {
  container: {
    backgroundColor: ColorPalette.brand.primaryBackground,
  },
  carouselContainer: {
    backgroundColor: ColorPalette.brand.primaryBackground,
  },
  pagerDot: {
    borderColor: ColorPalette.brand.primary,
  },
  pagerDotActive: {
    color: ColorPalette.brand.primary,
  },
  pagerDotInactive: {
    color: ColorPalette.brand.secondary,
  },
  pagerNavigationButton: {
    color: ColorPalette.brand.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTintColor: ColorPalette.grayscale.white,
  headerText: {
    ...TextTheme.bold,
  },
  bodyText: {
    ...TextTheme.normal,
  },
  imageDisplayOptions: {
    fill: ColorPalette.notification.infoText,
  },
}

export const DialogTheme = {
  modalView: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
  },
  titleText: {
    color: ColorPalette.grayscale.white,
  },
  description: {
    color: ColorPalette.grayscale.white,
  },
  closeButtonIcon: {
    color: ColorPalette.grayscale.white,
  },
  carouselButtonText: {
    color: ColorPalette.grayscale.white,
  },
}

const LoadingTheme = {
  backgroundColor: ColorPalette.brand.modalPrimaryBackground,
}
const PINEnterTheme = {
  image: {
    alignSelf: 'center',
    marginBottom: 20,
  },
}
const PINInputTheme = {
  cell: {
    backgroundColor: ColorPalette.brand.secondaryBackground,
    borderColor: ColorPalette.brand.secondary,
    borderWidth: 1,
  },
  focussedCell: {
    borderColor: ColorPalette.brand.headerIcon,
  },
  cellText: {
    color: ColorPalette.brand.text,
  },
  icon: {
    color: ColorPalette.brand.headerIcon,
  },
  codeFieldRoot: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelAndFieldContainer: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    backgroundColor: ColorPalette.brand.secondaryBackground,
    borderColor: ColorPalette.brand.secondary,
    borderWidth: 1,
  },
}

const CredentialCardShadowTheme = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.3,
} satisfies ViewStyle

const SelectedCredTheme = {
  borderWidth: 5,
  borderRadius: 15,
  borderColor: ColorPalette.semantic.focus,
} satisfies ViewStyle

export const Assets = {
  svg: {
    activityIndicator: ActivityIndicator,
    appLockout: AppLockout,
    biometrics: Biometrics,
    credentialDeclined: CredentialDeclined,
    deleteNotification: DeleteNotification,
    emptyWallet: EmptyWallet,
    contactBook: ContactBook,
    logo: Logo,
    proofRequestDeclined: ProofRequestDeclined,
    arrow: Arrow,
    iconCredentialOfferDark: IconCredentialOfferDark,
    iconCredentialOfferLight: IconCredentialOfferLight,
    iconInfoRecievedDark: IconInfoRecievedDark,
    iconInfoRecievedLight: IconInfoRecievedLight,
    iconInfoSentDark: IconInfoSentDark,
    iconInfoSentLight: IconInfoSentLight,
    iconProofRequestDark: IconProofRequestDark,
    iconProofRequestLight: IconProofRequestLight,
    preface: Preface,
    updateAvailable: UpdateAvailable,
    verifierRequestDeclined: VerifierRequestDeclined,
    noInfoShared: NoInfoShared,
    wallet: Wallet,
    checkInCircle: CheckInCircle,
    credentialCard: CredentialCard,
    walletBack: WalletBack,
    walletFront: WalletFront,
    credentialInHand: CredentialInHand,
    credentialList: CredentialList,
    scanShare: ScanShare,
    secureCheck: SecureCheck,
    secureImage: SecureImage,
    informationReceived: InformationReceived,
    pushNotificationImg: PushNotificationImg,
    chatLoading: ChatLoading,
    historyCardAcceptedIcon: HistoryCardAcceptedIcon,
    historyCardDeclinedIcon: HistoryCardRevokedIcon,
    historyCardExpiredIcon: HistoryCardExpiredIcon,
    historyCardRemovedIcon: HistoryCardRevokedIcon,
    historyCardRevokedIcon: HistoryCardRevokedIcon,
    historyCardUpdatesIcon: HistoryCardAcceptedIcon,
    historyPinUpdatedIcon: HistoryPinUpdatedIcon,
    historyInformationSentIcon: HistoryInformationSentIcon,
    historyInformationNotSentIcon: HistoryCardRevokedIcon,
    historyConnectionIcon: HistoryCardAcceptedIcon,
    historyConnectionRemovedIcon: HistoryCardRevokedIcon,
    historyActivateBiometryIcon: HistoryCardAcceptedIcon,
    historyDeactivateBiometryIcon: HistoryCardRevokedIcon,
    iconChevronRight: IconChevronRight,
    homeCenterImg: HomeCenterImg,
    iconDelete: IconDelete,
    iconEdit: IconEdit,
    iconCode: IconCode,
    iconError: IconError,
    iconWarning: IconWarning,
    tabOneIcon: TabOneIcon,
    tabOneFocusedIcon: TabOneFocusedIcon,
    tabTwoIcon: TabTwoIcon,
    tabThreeIcon: TabThreeIcon,
    tabThreeFocusedIcon: TabThreeFocusedIcon,
  },
  img: {
    logoPrimary: {
      src: require('./assets/img/logo-large.png'),
      aspectRatio: 1,
      height: '33%',
      width: '33%',
      resizeMode: 'contain',
    },
    logoSecondary: {
      src: require('./assets/img/logo-large.png'),
      aspectRatio: 1,
      height: 120,
      width: 120,
      resizeMode: 'contain',
    },
  },
}

const InputInlineMessage: IInlineInputMessage = {
  inlineErrorText: { ...TextTheme.inlineErrorText },
  InlineErrorIcon: Assets.svg.iconError,
  inlineWarningText: { ...TextTheme.inlineWarningText },
  InlineWarningIcon: Assets.svg.iconWarning,
}

export interface ITheme {
  themeName: string
  Spacing: ISpacing
  ColorPalette: IColorPalette
  TextTheme: ITextTheme
  InputInlineMessage: IInlineInputMessage
  Inputs: IInputs
  Buttons: any
  ListItems: any
  TabTheme: ITabTheme
  NavigationTheme: any
  HomeTheme: any
  SettingsTheme: any
  ChatTheme: any
  OnboardingTheme: any
  DialogTheme: any
  LoadingTheme: any
  PINEnterTheme: any
  PINInputTheme: any
  CredentialCardShadowTheme: ViewStyle
  SelectedCredTheme: ViewStyle
  heavyOpacity: any
  borderRadius: any
  borderWidth: typeof borderWidth
  maxFontSizeMultiplier: number
  Assets: IAssets
}

export const bifoldTheme: ITheme = {
  themeName: 'bifold',
  Spacing,
  ColorPalette: ColorPalette,
  TextTheme,
  InputInlineMessage,
  Inputs,
  Buttons,
  ListItems,
  TabTheme,
  NavigationTheme,
  HomeTheme,
  SettingsTheme,
  ChatTheme,
  OnboardingTheme,
  DialogTheme,
  LoadingTheme,
  PINEnterTheme,
  PINInputTheme,
  CredentialCardShadowTheme,
  SelectedCredTheme,
  heavyOpacity,
  borderRadius,
  borderWidth,
  maxFontSizeMultiplier,
  Assets,
}

export const themes: ITheme[] = [bifoldTheme]
