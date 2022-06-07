import React from "react";

const Flex = ({ children, style = '' }) => {
  return (
    <div style={{ display: "flex", flex: "1 1 auto", ...style }}>
      {children}
    </div>
  );
};

export default Flex;
