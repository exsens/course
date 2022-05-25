import { Routes, Route, useParams } from 'react-router-dom';

import MessagesInput from '../messages-input/messages-input.jsx';
import MessagesList from '../messages-list/messages-list';


const MessagesContent = ({messages}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MessagesList style={{ flex: '1 1 auto;' }} />} />
        <Route path='/:id' element={<MessagesList style={{ flex: '1 1 auto;' }} messages={messages} />} />
      </Routes>
    </div>
  )
}

export default MessagesContent