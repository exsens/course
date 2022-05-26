import { useRef } from 'react';
import { addMessageAction } from '../../../store.js';

import c from './messages-input.module.scss';

const MessagesInput = ({ id, dispatch }) => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const text = inputRef.current.value;
    dispatch(addMessageAction({ id, text }))
    inputRef.current.value = '';
  }

  return (
    <form id="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="message" className={c.label}>
        <input ref={inputRef} name="message" className={c.input} />
        <button onClick={handleSubmit} type="submit" className={c.button}>send</button>
      </label>
    </form>
  )
}

export default MessagesInput;