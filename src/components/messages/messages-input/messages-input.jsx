import { useState } from 'react'
import c from './messages-input.module.scss'

const MessagesInput = ({ id, addMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    addMessage(+id, message)
    setMessage('')
  }

  return (
    <form id="form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="message" className={c.label}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} name="message" className={c.input} />
        <button onClick={handleSubmit} type="submit" className={c.button}>
          send
        </button>
      </label>
    </form>
  )
}

export default MessagesInput
