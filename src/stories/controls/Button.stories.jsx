import { Button } from '@mui/material'

export default {
  title: 'Controls/Button',
  component: Button,
  // argTypes: {
  //   size: {
  //     type: 'string',
  //     description: 'Размер кнопки',
  //     defaultValue: 'small',
  //     options: ['small', 'medium', 'large'],
  //     control: {
  //       type: 'radio',
  //     },
  //   },
  //   theme: {
  //     type: 'string',
  //     description: 'Тема',
  //     default: 'light',
  //     options: ['light', 'dark'],
  //     control: {
  //       type: 'radio',
  //     },
  //   },
  // },
}

const Template = (arg) => <Button {...arg} />
export const Default = Template.bind({})

Default.args = {
  children: 'Кнопка',
  type: 'submit',
  color: 'primary',
  variant: 'contained',
  // theme: 'light',
  // primary: true,
  // secondary: false,
  // fixed: false,
  // type: 'button',
  // action: true,
  // a11yTitle: 'Кнопка',
  // disabled: false,
  // onClick: () => alert('medium btn'),
}

// export const Primary = Button.bind({})

// Primary.args = {
//   label: 'Primary',
//   theme: 'light',
//   primary: true,
//   secondary: false,
//   fixed: false,
//   type: 'button',
//   action: false,
//   a11yTitle: 'Кнопка',
//   disabled: false,
//   onClick: () => alert('medium btn'),
// }

// export const Secondary = Button.bind({})

// Secondary.args = {
//   label: 'Secondary',
//   theme: 'light',
//   primary: false,
//   secondary: true,
//   fixed: false,
//   type: 'button',
//   action: true,
//   a11yTitle: 'Кнопка',
//   disabled: false,
//   onClick: () => alert('medium btn'),
// }
