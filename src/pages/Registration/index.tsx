import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { authActions } from '@store/auth-slice';

import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { Footer } from '@components/Footer';
import { InputForm } from '@components/InputForm';

export function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameMessage = useSelector(
    (state: RootStateOrAny) => state.auth.nameMessage
  );
  const emailMessage = useSelector(
    (state: RootStateOrAny) => state.auth.emailMessage
  );
  const passwordMessage = useSelector(
    (state: RootStateOrAny) => state.auth.passwordMessage
  );
  const isMessageInitial = useSelector(
    (state: RootStateOrAny) => state.auth.isMessageInitial
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(authActions.resetMessages());
  }, [dispatch]);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    dispatch(
      authActions.validateInput({ type: 'name', value: event.target.value })
    );
  };

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(
      authActions.validateInput({ type: 'email', value: event.target.value })
    );
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    dispatch(
      authActions.validateInput({ type: 'password', value: event.target.value })
    );
  };

  const readyToSubmit =
    nameMessage === '' &&
    emailMessage === '' &&
    passwordMessage === '' &&
    !isMessageInitial;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      authActions.registerAccount({
        name: name,
        email: email,
        password: password
      })
    );
  };

  useEffect(() => {
    if (readyToSubmit) {
      setName('');
      setEmail('');
      setPassword('');
      dispatch(authActions.defineInitialStateOfMessages());
      navigate('/');
    }
  }, [dispatch, navigate, readyToSubmit]);

  return (
    <>
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
            isTheFirst={true}
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
      <Footer />
    </>
  );
}
