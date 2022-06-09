import { Theme } from './theme'

const defaultFontColor = '#bea277'
const defaultFontLinkColor = '#b38136'
const defaultFontLinkActiveColor = '#e0921c'
const defaultBorderColor = '#5f3f0e'
const defaultBorderActiveColor = '#aa6d12'
const defaultAnimationDuration = '200ms'

export const PathOfExileTheme: Theme = {
  mainColor: '#221d19',
  animationsEnabled: true,
  smoothScrollingEnabled: true,

  headerColor: '#44392d',
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

  sidebarColor: '#403B33',
  sidebarFontColor: defaultFontColor,
  sidebarFontLinkHasUnderscore: true,
  sidebarFontLinkIsBold: true,
  sidebarItemColor: '#4b3717',
  sidebarItemActiveColor: '#644a1a',
  sidebarItemHasBorder: true,
  sidebarItemBorderColor: defaultBorderColor,
  sidebarItemBorderActiveColor: defaultBorderActiveColor,
  sidebarLinkColor: defaultFontLinkColor,
  sidebarLinkActiveColor: defaultFontLinkActiveColor,
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
