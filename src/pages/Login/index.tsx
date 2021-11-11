import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { LinkTo } from './styles';

export function Login() {
  return (
    <BoxAside
      title="Authentication"
      buttonInsideText="Log In"
      buttonOutsideText="Sign Up"
    >
      <InputForm text="Email" type="email" />
      <InputForm text="Password" type="password" />
      <LinkTo to="/reset-password">I forgot my password</LinkTo>
    </BoxAside>
  );
}
