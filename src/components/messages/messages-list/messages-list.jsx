import { useParams } from 'react-router-dom'
import MessagesInput from '../messages-input/messages-input.jsx';
import MessagesItem from '../messages-item/messages-item'

const MessagesList = ({ messages, dispatch}) => {
  const idMessage = useParams().id;
  const userMessages = idMessage ? messages[idMessage].text : null;
  return (<>
    <ul style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
      {messages ? userMessages.map((message, idx) => {
        return <MessagesItem key={idx} text={message} />
      }) : <h3>Select the friend</h3>}
    </ul>
    {idMessage ? <MessagesInput id={idMessage} dispatch={dispatch}/> : null}
  </>

  )
}

export default MessagesList;