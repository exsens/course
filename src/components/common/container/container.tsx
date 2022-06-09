import React, { FC, ReactNode } from "react";

import "./container.scss";

interface ContainerPropsTypes {
  children: ReactNode;
}

const Container: FC<ContainerPropsTypes> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
