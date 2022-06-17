import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import dialogs from '../../../mobx/dialogs'
import MessagesInput from '../messages-input/messages-input'
import MessagesItem from '../messages-item/messages-item'

export const MessagesList = observer(() => {
  const { messages, addMessage } = dialogs

  const idDialog = useParams().id
  const currentIdMessage = idDialog < messages.length ? idDialog : ''
  const userMessages = currentIdMessage ? messages[currentIdMessage].text : null
  return (
    <>
      {userMessages ? (
        <>
          <ul
            style={{
              marginBottom: '15px',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
            }}
          >
            {userMessages.map((message, idx) => (
              <MessagesItem key={idx} text={message} />
            ))}
          </ul>
          <MessagesInput id={currentIdMessage} addMessage={addMessage} />
        </>
      ) : (
        <h3>Select the friend</h3>
      )}
    </>
  )
})
