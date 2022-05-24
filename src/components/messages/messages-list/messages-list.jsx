import { Routes, Route } from 'react-router-dom'
import MessagesItem from '../messages-item/messages-item'

const MessagesList = ({messages}) => {

  return (
    <ul>
      <Routes>
      {messages.map((message) => {
        return <Route key={message.id} path={`${message.id}`} element={<MessagesItem text={message.text} />}/>
      })}
      </Routes>
      
    </ul>

  )
}

export default MessagesList;