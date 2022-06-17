import { defaults } from 'chart.js'
import { Theme } from './themes/theme'

export default function applyChartsTheme (theme?: Theme) {
  defaults.backgroundColor = 'green'
}
