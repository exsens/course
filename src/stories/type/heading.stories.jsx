import { Grommet, Heading } from 'grommet'
import { theme } from '../../theme/theme'
import Title from '../../ui/type/heading'

export default {
  title: 'Type/Title',
  component: Title,
}

const Template = (arg) => (
  <Grommet theme={theme} themeMode={arg.theme}>
    <Title {...arg}>{arg.children}</Title>
  </Grommet>
)
export const MainTitle = Template.bind({})

MainTitle.args = {
  children: 'text',
  level: 2,
  size: 'medium',
  secondary: false,
}
