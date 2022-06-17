import { defaults } from 'chart.js'
import { PathOfExileTheme } from './themes/pathofexile'
import { Theme } from './themes/theme'

export default function applyChartsTheme (newTheme?: Theme) {
  const theme = newTheme ?? PathOfExileTheme

  defaults.backgroundColor = theme.chartBackgroundColor
  defaults.borderColor = theme.chartBorderColor
  defaults.color = theme.chartFontColor
  defaults.font.family = theme.fontName
  defaults.font.size = theme.chartFontSizePt
}
