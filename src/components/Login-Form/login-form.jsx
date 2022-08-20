import './login-form.scss'
import { useAuth0 } from '@auth0/auth0-react'

const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <form>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </form>
  );
};

export default LoginForm;