import { ThemeType } from 'grommet'
import getColorPresets from '../utils/styles/getColorPreset'
import { button } from './button'
import typography from './typography'

export const theme: ThemeType = {
  global: {
    colors: {
      text: {
        light: getColorPresets('black').black,
        dark: getColorPresets('white').white,
      },

      background: {
        light: getColorPresets('steelGray').steelGray60,
        dark: getColorPresets('black').black,
      },
    },

    font: {
      family: 'Comfortaa, cursive',
      size: '12px',
      height: '1.2',
    },
  },

  text: {
    small: {
      size: typography.fsTiny,
    },
    medium: {
      size: typography.fsNormal,
    },
    large: {
      size: typography.fsMedium,
    },
  },

  button,
}
