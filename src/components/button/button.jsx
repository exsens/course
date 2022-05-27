import c from './button.module.scss'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={c.button}>{children}</button>
  )
}

export default Button