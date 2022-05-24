import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesList from '../../components/messages/messages-list/messages-list.jsx';
import { Routes, Route } from 'react-router-dom';

const Dialogs = ({ users, messages }) => {

  return (
    <Flex style={{ justifyContent: 'space-between' }}>
      <MembersList users={users} />
      <Routes>
        <Route path='/' element={<MessagesList style={{ flex: '1 1 auto;' }} />} />
        <Route path='/:id' element={<MessagesList style={{ flex: '1 1 auto;' }} messages={messages}/>} />
      </Routes>
    </Flex>
  )
}

export default Dialogs