import { useRef } from 'react';
import c from './messages-input.module.scss';

const MessagesInput = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    const value = inputRef.current.value;

  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="message" className={c.label}>
        <input onChange={handleChange} ref={inputRef} name="message" className={c.input} />
        <button type="submit" className={c.button}>send</button>
      </label>
    </form>
  )
}

export default MessagesInput;