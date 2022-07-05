import React, { FC, ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/arrow_down.svg'

// type Props = {
//   children: ReactNode
//   color: 'primary' | 'secondary'
//   variant: 'contained'
// }

export const Button = ({ children, action, fixed, ...props }) => {
  return (
    <MuiButton sx={fixed && { minWidth: '102px' }} endIcon={action && <ArrowIcon stroke="currentColor" />} {...props}>
      {children}
    </MuiButton>
  )
}
