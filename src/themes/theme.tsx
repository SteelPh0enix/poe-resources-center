export interface Theme {
  mainColor: string
  animationsEnabled: boolean
  smoothScrollingEnabled: boolean

  headerColor: string
  headerFontColor: string
  subHeaderFontColor: string
  subHeaderLinkColor: string
  subHeaderLinkActiveColor: string
  subHeaderLinkHasUnderscore: boolean
  subHeaderLinkIsBold: boolean

  fontColor: string
  fontLinkColor: string
  fontLinkActiveColor: string
  fontLinkHasUnderscore: boolean
  fontLinkIsBold: boolean
  fontAnimationsEnabled: boolean,
  fontAnimationsDuration: string,

  sidebarColor: string
  sidebarFontColor: string
  sidebarFontLinkHasUnderscore: boolean
  sidebarFontLinkIsBold: boolean
  sidebarItemColor: string
  sidebarItemActiveColor: string
  sidebarItemHasBorder: boolean
  sidebarItemBorderColor: string
  sidebarItemBorderActiveColor: string
  sidebarLinkColor: string
  sidebarLinkActiveColor: string
  sidebarAnimationsEnabled: boolean
  sidebarAnimationsDuration: string

  buttonColor: string
  buttonFontColor: string
  buttonActiveColor: string
  buttonFontActiveColor: string
  buttonHasBorder: boolean
  buttonBorderColor: string
  buttonBorderActiveColor: string
  buttonAnimationsEnabled: boolean
  buttonAnimationsDuration: string

  inputFontColor: string
  inputBackgroundColor: string
  inputPlaceholderFontColor: string
  inputHasBorder: boolean
  inputBorderColor: string
  inputActiveFontColor: string
  inputActiveBorderColor: string
  inputActiveBackgroundColor: string
  inputAnimationsEnabled: boolean,
  inputAnimationsDuration: string,
}
