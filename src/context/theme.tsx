import { FC, ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, useTheme } from '@mui/material/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
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

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '13px',
            borderRadius: '4px',
            lineHeight: '1.18',
            padding: '7px 16px 8px',
            fontWeight: '400',
            textTransform: 'capitalize',
          },
        },
      },
    },
  })

  theme = createTheme(responsiveFontSizes(theme))

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
