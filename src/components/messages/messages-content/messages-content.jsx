import { Routes, Route } from 'react-router-dom';

import MessagesList from '../messages-list/messages-list';


const MessagesContent = () => {
  return (
    <div style={{flex: '1', maxWidth: '600px'}}>
      <Routes>
        <Route path='/' element={<MessagesList style={{ flex: '1 1 auto;' }} />} />
        <Route path='/:id' element={<MessagesList style={{ flex: '1 1 auto;' }}/>} />
      </Routes>
    </div>
  )
}

export default MessagesContent