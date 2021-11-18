import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { authActions } from '@store/auth-slice';
import { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkTo } from './styles';

interface UserProps {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootStateOrAny) => state.auth.users);
  // const emailMessage = useSelector(
  //   (state: RootStateOrAny) => state.auth.emailMessage
  // );
  // const passwordMessage = useSelector(
  //   (state: RootStateOrAny) => state.auth.passwordMessage
  // );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const emailIsValid = email.trim().length > 0 && email.includes('@');
    const emailExists = users.find((user: UserProps) => user.email === email);

    if (emailExists !== undefined && emailIsValid) {
      if (emailExists.password === password) {
        dispatch(
          authActions.onLogin({
            email: email,
            password: password
          })
        );
        setEmail('');
        setPassword('');
        setPasswordMessage('');
        setEmailMessage('');
        navigate('/home');
      } else {
        setPasswordMessage('Invalid password');
      }
    } else {
      setEmailMessage('Invalid email');
    }

    // if (email.trim().length > 0 && password.trim().length > 0) {
    //   dispatch(
    //     authActions.onLogin({
    //       email: email,
    //       password: password
    //     })
    //   );

    //   if (emailMessage === '' && passwordMessage === '') {
    //     setEmail('');
    //     setPassword('');
    //     dispatch(authActions.resetMessages());
    //     // navigate('/home');
    //   }
    // }
  };

  return (
    <AuthComponent>
      <BoxAside
        title="Authentication"
        buttonInsideText="Log In"
        buttonOutsideText="Sign Up"
        type="registration"
        onInsideClick={submitHandler}
        onOutsideClick={() => navigate('/registration')}
      >
        <InputForm
          text="Email"
          type="email"
          onChange={emailChangeHandler}
          message={emailMessage}
        />
        <InputForm
          text="Password"
          type="password"
          onChange={passwordChangeHandler}
          message={passwordMessage}
        />
        <LinkTo to="/reset-password">I forgot my password</LinkTo>
      </BoxAside>
    </AuthComponent>
  );
}
