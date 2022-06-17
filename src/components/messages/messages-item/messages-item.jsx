import React from 'react'
import c from './messages-item.module.scss'

const MessagesItem = ({ text }) => {
  return <li className={c.messages_item}>{text}</li>
}

export default MessagesItem
