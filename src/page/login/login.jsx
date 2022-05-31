import Button from "../../components/button/button.jsx";
import Input from "../../components/input/input.jsx";

import c from "./login.module.scss";

const Login = () => {
  return (
    <div className={c.login}>
      <form className={c.form}>
        <Input style={{marginBottom: '25px'}} type={"text"} placeholder={"login?"} name={"login"} />
        <Input type={"password"} placeholder={"password"} name={"password"} />
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default Login;
