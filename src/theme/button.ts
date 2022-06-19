import { ButtonType } from 'grommet/themes/base'
import getColorPresets from '../utils/styles/getColorPreset'

export const button: ButtonType = {
  padding: { horizontal: '16px', vertical: '1px' },
  border: {
    radius: '4px',
  },

  default: {
    font: {
      weight: 400,
    },

    color: {
      dark: getColorPresets('white').white,
      light: getColorPresets('black').black,
    },

    background: {
      color: {
        light: getColorPresets('white').white,
        dark: getColorPresets('white').white,
      },
    },
  },

  primary: {
    font: {
      weight: 400,
    },

    color: {
      light: getColorPresets('black').black,
      dark: getColorPresets('white').white,
    },

    background: {
      color: {
        light: getColorPresets('blue').blue400,
        dark: getColorPresets('steelGray').steelGray60,
      },
    },
  },

  secondary: {
    font: {
      weight: 400,
    },

    color: {
      light: getColorPresets('steelGray').steelGray540,
    },

    background: {
      color: {
        light: getColorPresets('lightBlue').lightBlue80,
        dark: getColorPresets('red').redLight,
      },
    },
  },

  size: {
    small: {
      border: {
        radius: '4px',
      },
    },
    medium: {
      pad: {
        vertical: '3px',
        horizontal: '15px',
      },
      border: {
        radius: '4px',
      },
    },
    large: {
      pad: {
        vertical: '5px',
        horizontal: '17px',
      },
      border: {
        radius: '4px',
      },
    },
  },
}
