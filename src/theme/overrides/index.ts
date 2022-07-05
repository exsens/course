import { Theme } from '@mui/material/styles'
import Button from './Button'
import Input from './Input'

const getOverrides = (theme: Theme) => {
  return Object.assign(Button(theme), Input(theme))
}

export default getOverrides
