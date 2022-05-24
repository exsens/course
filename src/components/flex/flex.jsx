import React from 'react'

const Flex = ({ children }) => {
  return (
    <div style={{ display: 'flex', flex: "1 1 auto" }}>
      {children}
    </div>
  )
}

export default Flex