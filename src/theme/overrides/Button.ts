import { Theme } from '@mui/material/styles'
import getColorPresets from '../../utils/styles/getColorPreset'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: getColorPresets('white').white,
          backgroundColor: getColorPresets('blue').blue400,
        },
        containedSecondary: {
          color: getColorPresets('lightBlue').lightBlue40,
          backgroundColor: getColorPresets('steelGray').steelGray540,
          '&:hover': {
            backgroundColor: getColorPresets('gray').gray200,
          },
        },
      },
    },
  }
}

export default Button
