export interface Theme {
  mainColor: string
  animationsEnabled: boolean
  smoothScrollingEnabled: boolean

  searchBarAnimationEnabled: boolean
  searchBarAnimationDuration: string

  scrollbarColor: string
  scrollbarBackgroundColor: string

  headerColor: string
  headerFontColor: string
  headerLinkColor: string
  headerLinkActiveColor: string
  headerLinkHasUnderscore: boolean
  headerLinkIsBold: boolean

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
  sidebarControlBoxColor: string,
  sidebarLinkColor: string
  sidebarLinkActiveColor: string
  sidebarToggleAnimationEnabled: boolean,
  sidebarToggleAnimationDuration: string,
  sidebarAnimationsEnabled: boolean,
  sidebarAnimationsDuration: string,

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
  inputAnimationsEnabled: boolean
  inputAnimationsDuration: string

  tableFontColor: string
  tableBorderColor: string
  tableHeaderSeparatorColor: string
  tableHeaderBackgroundColor: string
  tableOddRowsBackgroundColor: string
  tableEvenRowsBackgroundColor: string
  tableColumnLineEnabled: boolean
  tableColumnLineColor: string
  tableRowLineEnabled: boolean
  tableRowLineColor: string

  chartBackgroundColor: string
  chartBorderColor: string
  chartFontColor: string
}
