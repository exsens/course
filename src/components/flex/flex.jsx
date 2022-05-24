import React from 'react'

const Flex = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {children}
    </div>
  )
}

export default Flex