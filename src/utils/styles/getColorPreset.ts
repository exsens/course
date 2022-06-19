// theme
// @type
// import { ThemeColorPresets } from "@components/settings/type";
// import palette from "@theme/palette";

// ----------------------------------------------------------------------

const colorPresets = [
  // BLUE
  {
    name: 'blue',
    blue400: '#5181B8',
    blue420: '#4A76A8',
    blue600: '#2A5885',
    blue640: '#224B7A',
    blue800: '#1D3A5C',
    blue980: '#D0D3D9',
    blueBright: '#5C9CE6',
  },
  // LIGHT_BLUE
  {
    name: 'lightBlue',
    lightBlue40: '#DFE6ED',
    lightBlue80: '#DAE2EA',
    lightBlue100: '#9EB4C8',
    lightBlue300: '#7996B23',
    lightBlueA300: '#8FADC8',
    lightBlue400: '#9EB4C8',
    lightBlue500: '#7996B2',
    lightBlue700: '#45688E',
  },
  // GRAY
  {
    name: 'gray',
    gray200: '#cccccc',
    gray300: '#B2B2B2',
    gray400: '#939393',
    gray500: '#828282',
    gray600: '#656565',
    gray700: '#555555',
    gray800: '#333333',
    gray900: '#222222',
    gray960: '#0A0A0A',
  },

  // STEEL_GRAY

  {
    name: 'steel-gray',
    steelGray60: '#EDEEF0',
    steelGray540: '#626D7A',
  },

  //WHITE
  {
    name: 'white',
    white: '#ffffff',
  },

  //BLACK
  {
    name: 'black',
    black: '#000000',
  },

  // RED
  {
    name: 'red',
    redLight: '#FFD6CC',
  },
]

const blue = colorPresets[0]
const lightBlue = colorPresets[1]
const gray = colorPresets[2]
const steelGray = colorPresets[3]
const white = colorPresets[4]
const black = colorPresets[5]
const red = colorPresets[6]

export default function getColorPresets(presetsKey: ThemeColorPresets) {
  return {
    blue,
    lightBlue,
    gray,
    white,
    black,
    steelGray,
    red,
  }[presetsKey]
}

export type ThemeColorPresets = 'blue' | 'lightBlue' | 'gray' | 'white' | 'black' | 'steelGray' | 'red'
