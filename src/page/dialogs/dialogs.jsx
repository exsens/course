import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesList from '../../components/messages/messages-list/messages-list.jsx';

const Dialogs = () => {
  const users = [
    {id: '0', name: 'JO'},
    {id: '1', name: 'WEL'},
    {id: '2', name: 'ASDAsd'},
  ]

  return (
    <Flex style={{justifyContent:'space-between'}}>
      <MembersList users={users}/>
      <MessagesList style={{flex: '1 1 auto;'}}/>
    </Flex>
  )
}

export default Dialogs