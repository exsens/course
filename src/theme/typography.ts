import { pxToRem } from '../utils/styles/getFontValue'

const FONT_PRIMARY = 'Comfortaa, sans-serif'

const typography = {
  fontFamily: FONT_PRIMARY,
  h1: {
    fontWeight: 700,
    lineHeight: 25 / 19,
    fontSize: pxToRem(19),
  },
  fsTiny: pxToRem(12),
  fsSmall: pxToRem(12.5),
  fsNormal: pxToRem(13),
  fsMedium: pxToRem(14),
} as const

export default typography
