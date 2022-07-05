import { ThemeProvider } from '../../context/theme'
import { Button } from '../../ui/controls/Button'

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    color: {
      type: 'string',
      description: 'Цвет',
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
    },
  },
}

const Template = (arg) => (
  <ThemeProvider>
    <Button {...arg} />
  </ThemeProvider>
)
export const Default = Template.bind({})

Default.args = {
  children: 'Кнопка',
  type: 'submit',
  variant: 'contained',
  fixed: false,
  action: true,
  disabled: true,
}
