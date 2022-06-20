import { FC, ReactElement, ReactNode } from 'react'
import { HeaderProps, Heading, HeadingExtendedProps } from 'grommet'
import getColorPresets from '../../utils/styles/getColorPreset'

interface TitleProps extends HeadingExtendedProps {
  children: ReactNode | ReactElement
  secondary: boolean
}

const Title: FC<TitleProps> = ({ children, level, size, secondary }) => {
  return (
    <Heading level={level} size={size} color={secondary ? getColorPresets('blue').blue200 : undefined}>
      {children}
    </Heading>
  )
}

export default Title
