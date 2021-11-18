import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { authActions } from '@store/auth-slice';
import { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootStateOrAny) => state.auth.users);
  // const emailMessage = useSelector(
  //   (state: RootStateOrAny) => state.auth.emailMessage
  // );
  // const passwordMessage = useSelector(
  //   (state: RootStateOrAny) => state.auth.passwordMessage
  // );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

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
    const nameIsValid = name.trim().length > 0;
    const emailIsValid = email.trim().length > 0 && email.includes('@');
    const emailExists =
      users.find((user: UserProps) => user.email === email) !== undefined
        ? true
        : false;
    const passwordIsValid = password.trim().length > 7;

    if (!emailExists && nameIsValid && emailIsValid && passwordIsValid) {
      dispatch(
        authActions.registerAccount({
          name: name,
          email: email,
          password: password
        })
      );
      setName('');
      setEmail('');
      setPassword('');
      setNameMessage('');
      setEmailMessage('');
      setPasswordMessage('');
      navigate('/');
    } else {
      if (emailExists) {
        setEmailMessage('This email is already in use.');
      }
      if (!emailIsValid) {
        setEmailMessage('Invalid email.');
      }
      if (!passwordIsValid) {
        setPasswordMessage(
          'The password contains fewer than eight characters.'
        );
      }
      if (!nameIsValid) {
        setNameMessage('Invalid name.');
      }
      if (!emailExists && emailIsValid) {
        setEmailMessage('');
      }
      if (passwordIsValid) {
        setPasswordMessage('');
      }
      if (nameIsValid) {
        setNameMessage('');
      }
    }

    // if (nameMessage === '' && emailMessage === '' && passwordMessage === '') {
    //   setName('');
    //   setEmail('');
    //   setPassword('');

    // }
  };
  return (
    <AuthComponent>
      <BoxAside
        title="Registration"
        buttonInsideText="Register"
        buttonOutsideText="Back"
        type="back"
        onInsideClick={submitHandler}
        onOutsideClick={() => navigate(-1)}
      >
        <InputForm
          text="Name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
          message={nameMessage}
        />
        <InputForm
          text="Email"
          type="email"
          value={email}
          onChange={emailChangeHandler}
          message={emailMessage}
        />
        <InputForm
          text="Password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          message={passwordMessage}
        />
      </BoxAside>
    </AuthComponent>
  );
}
