import { pxToRem } from '../utils/styles/getFontValue'

const FONT_PRIMARY = 'Comfortaa, sans-serif'

export const typography = {
  fontFamily: FONT_PRIMARY,

  largeTitle: {
    fontWeight: 600,
    lineHeight: '1.2',
    fontSize: pxToRem(44),
    letterSpacing: '1%',
  },

  mediumTitle: {
    fontWeight: 500,
    lineHeight: '1.2',
    fontSize: pxToRem(28),
  },

  normalTitle: {
    fontWeight: 500,
    lineHeight: '1.2',
    fontSize: pxToRem(21),
  },

  smallTitle: {
    fontWeight: 500,
    lineHeight: '1.2',
    fontSize: pxToRem(16),
  },

  fsTiny: pxToRem(12),
  fsSmall: pxToRem(12.5),
  fsNormal: pxToRem(13),
  fsMedium: pxToRem(14),
} as const

export default typography
