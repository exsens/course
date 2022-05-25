import MembersList from '../../components/members/members-list/members-list.jsx';
import Flex from '../../components/flex/flex.jsx'
import MessagesContent from '../../components/messages/messages-content/messages-content.jsx';


const Dialogs = ({state}) => {
  return (
    <Flex style={{ justifyContent: 'space-between' }}>
      <MembersList users={state.users} />
      <MessagesContent messages={state.messages}/>
    </Flex>
  )
}

export default Dialogs