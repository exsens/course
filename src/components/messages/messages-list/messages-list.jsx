import { useParams } from 'react-router-dom'
import MessagesItem from '../messages-item/messages-item'

const MessagesList = ({messages}) => {
  const idMessage = useParams().id;
  const userMessages = idMessage ? messages[idMessage].text : null; 
  return (
    <ul>
      {messages ? userMessages.map((message, idx) => {
        return <MessagesItem key={idx} text={message}/>
      }) : <h3>Select the friend</h3>}
    </ul>

  )
}

export default MessagesList;