import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesList from '../../components/messages/messages-list/messages-list.jsx';

const Dialogs = ({users, messages}) => {

  return (
    <Flex style={{justifyContent:'space-between'}}>
      <MembersList users={users}/>
      <MessagesList style={{flex: '1 1 auto;'}} messages={messages}/>
    </Flex>
  )
}

export default Dialogs