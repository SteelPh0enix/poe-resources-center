import { Theme } from './theme'

const defaultFontColor = '#A38D6D'
const defaultFontLinkColor = '#624E31'
const defaultFontLinkActiveColor = '#b9822f'
const defaultBorderColor = '#5f3f0e'
const defaultBorderActiveColor = '#aa6d12'

export const PathOfExileTheme: Theme = {
  mainColor: '#222222',
  headerColor: '#2c2923',

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

  buttonColor: '#3f240c',
  buttonActiveColor: '#6e3e15',
  buttonHasBorder: true,
  buttonBorderColor: defaultBorderColor,
  buttonBorderActiveColor: defaultBorderActiveColor,

  inputFontColor: defaultFontColor,
  inputHasBorder: true,
  inputBorderColor: defaultBorderColor,
  inputActiveFontColor: defaultFontColor,
  inputActiveBorderColor: defaultBorderActiveColor,
  inputPlaceholderFontColor: '#222222',
  inputBackgroundColor: '#383838'
}
