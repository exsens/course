import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesContent from '../../components/messages/messages-content/messages-content.jsx';


const Dialogs = ({ users, messages }) => {

  return (
    <Flex style={{ justifyContent: 'space-between' }}>
      <MembersList users={users} />
      <MessagesContent messages={messages}/>
    </Flex>
  )
}

export default Dialogs