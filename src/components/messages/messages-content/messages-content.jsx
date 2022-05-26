import { Routes, Route } from 'react-router-dom';

import MessagesList from '../messages-list/messages-list';


const MessagesContent = ({messages, dispatch}) => {
  return (
    <div style={{flex: '1', maxWidth: '600px'}}>
      <Routes>
        <Route path='/' element={<MessagesList style={{ flex: '1 1 auto;' }} />} />
        <Route path='/:id' element={<MessagesList style={{ flex: '1 1 auto;' }} messages={messages} dispatch={dispatch}/>} />
      </Routes>
    </div>
  )
}

export default MessagesContent