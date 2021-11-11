import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { useNavigate } from 'react-router-dom';
import { LinkTo } from './styles';

export function Login() {
  const navigate = useNavigate();

  return (
    <AuthComponent>
      <BoxAside
        title="Authentication"
        buttonInsideText="Log In"
        buttonOutsideText="Sign Up"
        onInsideClick={() => navigate('/home')}
        onOutsideClick={() => navigate('/registration')}
      >
        <InputForm text="Email" type="email" />
        <InputForm text="Password" type="password" />
        <LinkTo to="/reset-password">I forgot my password</LinkTo>
      </BoxAside>
    </AuthComponent>
  );
}
