import { Theme } from './theme'

const defaultFontColor = '#bea277'
const defaultFontLinkColor = '#a5814b'
const defaultFontLinkActiveColor = '#cc8a27'
const defaultBorderColor = '#5f3f0e'
const defaultBorderActiveColor = '#aa6d12'

export const PathOfExileTheme: Theme = {
  mainColor: '#221d19',

  headerColor: '#251d13',
  headerFontColor: '#ce8a25',
  subHeaderFontColor: '#af8340',
  subHeaderLinkColor: '#8d5c11',
  subHeaderLinkActiveColor: '#d68b1a',
  subHeaderLinkHasUnderscore: false,
  subHeaderLinkIsBold: true,

  fontColor: defaultFontColor,
  fontLinkColor: defaultFontLinkColor,
  fontLinkActiveColor: defaultFontLinkActiveColor,
  fontLinkHasUnderscore: true,
  fontLinkIsBold: false,

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

  buttonColor: '#3a2b1d',
  buttonFontColor: '#c79a57',
  buttonActiveColor: '#553e28',
  buttonFontActiveColor: '#d39437',
  buttonHasBorder: true,
  buttonBorderColor: defaultBorderColor,
  buttonBorderActiveColor: '#97714d',

  inputFontColor: defaultFontColor,
  inputBackgroundColor: '#2b241e',
  inputPlaceholderFontColor: '#dab886',
  inputHasBorder: true,
  inputBorderColor: defaultBorderColor,
  inputActiveFontColor: defaultFontColor,
  inputActiveBorderColor: defaultBorderActiveColor,
  inputActiveBackgroundColor: '#3d2f23'
}
