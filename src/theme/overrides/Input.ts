import { Theme } from '@mui/material/styles'
import getColorPresets from '../../utils/styles/getColorPreset'

const Input = (theme: Theme) => {
  return {
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },

      styleOverrides: {
        root: {
          backgroundColor: getColorPresets('blue').blue640,
          padding: 0,
          borderRadius: '14px',

          '&.Mui-focused': {
            backgroundColor: getColorPresets('blue').blue640,
          },
          '&:hover': {
            backgroundColor: getColorPresets('blue').blue640,
          },

          input: {
            color: getColorPresets('white').white,
            padding: '6px 15px 6px 28px',

            '&::placeholder': {
              color: getColorPresets('lightBlue').lightBlueA300,
            },
          },
        },
      },
    },
  }
}
export default Input
