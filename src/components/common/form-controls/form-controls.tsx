import React, {FC, ReactNode} from 'react';
import { WrappedFieldsProps } from 'redux-form';

import c from "./form-control.module.scss";

interface FormControlsPropTypes {
  children: ReactNode,
  label: string,
  meta: {touched: boolean, error?: string}
}

const FormControls: FC<FormControlsPropTypes> = ({
  meta: { touched, error},
  children,
  label,
}) => {
  const hasError = touched && error;

  return (
    <div className={hasError ? c.warning : ''}>
      {label && <label>{label}</label>}
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

interface InputPropsType {
  label: string,
  placeholder: string,
  type: string,
  meta: {touched: boolean, error?: string},
  input: FC<WrappedFieldsProps>
}

export const Input: FC<InputPropsType> = ({ input, meta, label, placeholder, type }) => {
  return (
    <FormControls label={label} meta={meta}>
      <input
        className={c.input}
        type={type}
        placeholder={placeholder}
        {...input}
      />
    </FormControls>
  );
};
