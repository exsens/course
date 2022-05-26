import { useParams } from 'react-router-dom'
import MessagesInput from '../messages-input/messages-input.jsx';
import MessagesItem from '../messages-item/messages-item'
import { connect } from 'react-redux';
import { addMessageAction } from '../../../store/dialogs/dialogs-action.js';


const MessagesList = ({ messages, addMessage }) => {
  const idMessage = useParams().id < messages.length ? useParams.id : '';
  const userMessages = idMessage ? messages[idMessage].text : null;
  return (
    <>
      {userMessages ?
        <>
          <ul style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
            {userMessages.map((message, idx) => <MessagesItem key={idx} text={message} />)}
          </ul>
          <MessagesInput id={idMessage} addMessage={addMessage} />
        </> :
        <h3>Select the friend</h3>}
    </>
  )
};

const mapStateToProps = (state) => ({
  messages: state.dialogsData.messages,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: ({ id, text }) => {
    dispatch(addMessageAction({ id, text }))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);