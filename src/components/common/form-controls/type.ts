import { FC, ReactNode } from 'react'
import { WrappedFieldsProps } from 'redux-form'

export interface FormControlsPropTypes {
  children: ReactNode
  label: string
  meta: { touched: boolean; error?: string }
}

export interface InputPropsType {
  label: string
  placeholder?: string
  type: string
  meta: { touched: boolean; error?: string }
  input: FC<WrappedFieldsProps>
}
