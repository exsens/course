import LoginForm from '../../components/login-form/login-form.jsx';
import c from './login.module.scss'

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={c.login}>
     <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
