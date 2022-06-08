import MembersList from '../../components/members/members-list/members-list';
import Flex from '../../components/flex/flex'
import MessagesContent from '../../components/messages/messages-content/messages-content';

const Dialogs = ({users}) => {
  return (
    <Flex style={{ justifyContent: 'space-between' }}>
      <MembersList users={users} />
      <MessagesContent/>
    </Flex>
  )
}

export default Dialogs;
