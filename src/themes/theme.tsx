export interface Theme {
  mainColor: string

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
  buttonFontColor: string
  buttonActiveColor: string
  buttonFontActiveColor: string
  buttonHasBorder: boolean
  buttonBorderColor: string
  buttonBorderActiveColor: string

  inputFontColor: string
  inputBackgroundColor: string
  inputPlaceholderFontColor: string
  inputHasBorder: boolean
  inputBorderColor: string
  inputActiveFontColor: string
  inputActiveBorderColor: string
  inputActiveBackgroundColor: string
}
