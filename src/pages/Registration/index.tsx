import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { Footer } from '@components/Footer';
import { InputForm } from '@components/InputForm';
import { authActions } from '@store/auth-slice';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      nameMessage === '' &&
      emailMessage === '' &&
      passwordMessage === '' &&
      !isMessageInitial
    ) {
      dispatch(
        authActions.registerAccount({
          name: name,
          email: email,
          password: password
        })
      );
      console.log('passou na validação');
      setName('');
      setEmail('');
      setPassword('');
      dispatch(authActions.defineInitialStateOfMessages());
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(authActions.resetMessages());
  }, [dispatch]);

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
