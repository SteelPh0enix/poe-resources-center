export interface Theme {
  mainColor: string
  headerColor: string

  fontColor: string
  fontLinkColor: string
  fontLinkActiveColor: string
  fontLinkHasUnderscore: boolean
  fontLinkIsBold: boolean

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

  buttonColor: string
  buttonActiveColor: string
  buttonHasBorder: boolean
  buttonBorderColor: string
  buttonBorderActiveColor: string

  inputFontColor: string
  inputHasBorder: boolean
  inputBorderColor: string
  inputActiveFontColor: string
  inputActiveBorderColor: string
  inputPlaceholderFontColor: string
  inputBackgroundColor: string
}
