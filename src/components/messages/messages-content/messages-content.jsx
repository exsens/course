import { Route, Routes } from 'react-router-dom'
import { MessagesList } from '../messages-list/messages-list'

const MessagesContent = () => {
  return (
    <div style={{ flex: '1', maxWidth: '600px' }}>
      <Routes>
        <Route path="/" element={<MessagesList />} />
        <Route path="/:id" element={<MessagesList />} />
      </Routes>
    </div>
  )
}

export default MessagesContent
