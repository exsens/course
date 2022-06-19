import c from './form-control.module.scss'
import { FormControlsPropTypes, InputPropsType } from './type'

const FormControls: React.FC<FormControlsPropTypes> = ({ meta: { touched, error }, children, label }) => {
  const hasError = touched && error

  return (
    <div className={hasError ? c.warning : ''}>
      {label && <label>{label}</label>}
      {children}
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Input: React.FC<InputPropsType> = ({ input, meta, label, placeholder, type }: any) => {
  return (
    <FormControls label={label} meta={meta}>
      <input className={c.input} type={type} placeholder={placeholder} {...input} />
    </FormControls>
  )
}
