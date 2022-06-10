import React, {FC, ReactElement, ReactNode } from "react";

import c from "./button.module.scss";

interface ButtonPropTypes {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode ;
}

const Button: FC<ButtonPropTypes> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={c.button}>
      {children}
    </button>
  );
};

export default Button;
