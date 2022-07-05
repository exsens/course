import { FC, ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, useTheme } from '@mui/material/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import getOverrides from '../theme/overrides'
import typography from '../theme/typography'
import getColorPresets from '../utils/styles/getColorPreset'

type Props = {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const defaultTheme = useTheme()

  let theme = createTheme({
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      primary: {
        main: `${getColorPresets('blue').blue400}`,
      },
    },

    typography,
  })

  theme = createTheme(responsiveFontSizes(theme))
  theme.components = getOverrides(theme)

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
