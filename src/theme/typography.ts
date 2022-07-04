import { pxToRem } from '../utils/styles/getFontValue'

const FONT_PRIMARY = 'Comfortaa, sans-serif'

export const typography = {
  fontFamily: FONT_PRIMARY,

  h1: {
    fontWeight: 400,
    lineHeight: '1.3',
    fontSize: pxToRem(19),
  },

  h2: {
    fontWeight: 400,
    lineHeight: '1.3',
    fontSize: pxToRem(13),
  },

  subtitle1: {
    fontWeight: 500,
    lineHeight: '1.2',
    fontSize: pxToRem(13),
  },

  subtitle2: {
    fontWeight: 500,
    lineHeight: '1.2',
    fontSize: pxToRem(16),
  },

  button: {
    fontSize: pxToRem(13),
    borderRadius: '4px',
    lineHeight: '1.18',
    padding: '7px 16px 8px',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
} as const

export default typography
