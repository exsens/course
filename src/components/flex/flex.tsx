import React, { ReactFragment, ReactPortal, FC } from "react";

interface PropsTypes {
  children: ReactFragment | ReactPortal | boolean | null | undefined;
  style?: { [key: string]: string };
}

const Flex: FC<PropsTypes> = ({ children, style }) => {
  return (
    <div style={{ display: "flex", flex: "1 1 auto", ...style }}>
      {children}
    </div>
  );
};

export default Flex;
