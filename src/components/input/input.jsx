import c from './input.module.scss';

const Input = ({type, placeholder, name}) => {
  return (
    <label className={c.label} htmlFor={name}>
      <input className={c.input} type={type} placeholder={placeholder} name={name}/>
    </label>
  );
};

export default Input;
