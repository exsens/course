import getColorPresets from '../utils/styles/getColorPreset'
import typography from './typography'

export const heading = {
  color: getColorPresets('black').black10,
  level: {
    2: {
      small: {
        size: typography.normalTitle.fontSize,
        height: typography.normalTitle.lineHeight,
      },
      medium: {
        size: typography.mediumTitle.fontSize,
        height: typography.mediumTitle.lineHeight,
      },
      large: {
        size: typography.largeTitle.fontSize,
        height: typography.largeTitle.lineHeight,
      },
    },
    3: {
      small: {
        size: typography.smallTitle.fontSize,
        height: typography.smallTitle.lineHeight,
      },
      medium: {
        size: typography.normalTitle.fontSize,
        height: typography.normalTitle.lineHeight,
      },
      large: {
        size: typography.mediumTitle.fontSize,
        height: typography.mediumTitle.lineHeight,
      },
    },
  },
}
