import React from 'react'
import { useParams } from 'react-router-dom'

const MessagesItem = ({text}) => {
  // const { id } = useParams()
  return (
    <li>{text}</li>
  )
}

export default MessagesItem