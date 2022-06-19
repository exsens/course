import { Box, Grommet } from 'grommet'
import { theme } from '../../theme/theme'
import MainButton from '../../ui/controls/main-button'

// export const Basic = (props) => (
//   <Grommet theme={theme}>
//     <Box>
//       <MainButton label={'Button'} primary size="medium" fixed />
//     </Box>
//   </Grommet>
// )

export default {
  title: 'Controls/Button',
  component: MainButton,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки',
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    theme: {
      type: 'string',
      description: 'Тема',
      default: 'light',
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Button = (arg) => (
  <Grommet theme={theme} themeMode={arg.theme}>
    <MainButton {...arg} />
  </Grommet>
)
export const Main = Button.bind({})

Main.args = {
  label: 'Кнопка',
  theme: 'light',
  primary: true,
  secondary: false,
  fixed: false,
  type: 'button',
  action: true,
  a11yTitle: 'Кнопка',
  disabled: false,
  onClick: () => alert('medium btn'),
}
