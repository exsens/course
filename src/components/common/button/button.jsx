import c from './button.module.scss'

const Button = ({ onClick, children, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={c.button}>{children}</button>
  )
}

export default Button