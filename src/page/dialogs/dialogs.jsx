import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesContent from '../../components/messages/messages-content/messages-content.jsx';


const Dialogs = ({store}) => {
  
  return (
    <Flex style={{ justifyContent: 'space-between' }}>
      <MembersList users={store.users} />
      <MessagesContent messages={store.messages}/>
    </Flex>
  )
}

export default Dialogs