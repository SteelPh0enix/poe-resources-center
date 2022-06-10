import { Theme } from './theme'

const defaultFontColor = '#d8aa64'
const defaultFontLinkColor = '#ffc267'
const defaultFontLinkActiveColor = '#f19f22'
const defaultBorderColor = '#7a4f0d'
const defaultBorderActiveColor = '#bb7b1c'
const defaultAnimationDuration = '200ms'

export const PathOfExileTheme: Theme = {
  mainColor: '#13110f',
  animationsEnabled: true,
  smoothScrollingEnabled: true,

  scrollbarColor: '#473a2e',
  scrollbarBackgroundColor: '#2c1d10',

  headerColor: '#3f2f18',
  headerFontColor: '#cf9845',
  headerLinkColor: '#c27400',
  headerLinkActiveColor: '#d68b1a',
  headerLinkHasUnderscore: false,
  headerLinkIsBold: true,

  fontColor: defaultFontColor,
  fontLinkColor: defaultFontLinkColor,
  fontLinkActiveColor: defaultFontLinkActiveColor,
  fontLinkHasUnderscore: true,
  fontLinkIsBold: false,
  fontAnimationsEnabled: true,
  fontAnimationsDuration: defaultAnimationDuration,

  sidebarColor: '#241708',
  sidebarFontColor: defaultFontColor,
  sidebarFontLinkHasUnderscore: true,
  sidebarFontLinkIsBold: true,
  sidebarItemColor: '#362611',
  sidebarItemActiveColor: '#462d10',
  sidebarItemHasBorder: true,
  sidebarItemBorderColor: '#643d0c',
  sidebarItemBorderActiveColor: defaultBorderActiveColor,
  sidebarControlBoxColor: '#241708',
  sidebarLinkColor: defaultFontLinkColor,
  sidebarLinkActiveColor: defaultFontLinkActiveColor,
  sidebarToggleAnimationEnabled: true,
  sidebarToggleAnimationDuration: '350ms',
  sidebarAnimationsEnabled: true,
  sidebarAnimationsDuration: defaultAnimationDuration,

  buttonColor: '#3a2b1d',
  buttonFontColor: '#c79a57',
  buttonActiveColor: '#553e28',
  buttonFontActiveColor: '#d39437',
  buttonHasBorder: true,
  buttonBorderColor: defaultBorderColor,
  buttonBorderActiveColor: '#97714d',
  buttonAnimationsEnabled: true,
  buttonAnimationsDuration: defaultAnimationDuration,

  inputFontColor: defaultFontColor,
  inputBackgroundColor: '#2b241e',
  inputPlaceholderFontColor: '#dab886',
  inputHasBorder: true,
  inputBorderColor: defaultBorderColor,
  inputActiveFontColor: defaultFontColor,
  inputActiveBorderColor: defaultBorderActiveColor,
  inputActiveBackgroundColor: '#3d2f23',
  inputAnimationsEnabled: true,
  inputAnimationsDuration: defaultAnimationDuration
}
