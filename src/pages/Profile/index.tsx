import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Footer, Header, InputProfile } from '@components/index';
import { AiFillEdit, AiFillSave } from 'react-icons/ai';

import { Container, Content, Button } from './styles';
import { useEffect, useState } from 'react';
import { authActions } from '@store/auth-slice';

export function Profile() {
  const [isEdit, setIsEdit] = useState(false);
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
  const userLogged = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );
  const isMessageInitial = useSelector(
    (state: RootStateOrAny) => state.auth.isMessageInitial
  );

  const [name, setName] = useState(userLogged.name);
  const [email, setEmail] = useState(userLogged.email);
  const [password, setPassword] = useState(userLogged.password);

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
      authActions.validateInput({
        type: 'emailRedefine',
        value: event.target.value
      })
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

  const editHandler = () => {
    setIsEdit(true);
  };

  const readyToSave =
    nameMessage === '' &&
    emailMessage === '' &&
    passwordMessage === '' &&
    !isMessageInitial;

  const saveHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      authActions.redefineRegister({
        name: name,
        email: email,
        password: password
      })
    );
  };

  useEffect(() => {
    if (readyToSave) {
      setName(userLogged.name);
      setEmail(userLogged.email);
      setPassword(userLogged.password);
      setIsEdit(false);
      dispatch(authActions.defineInitialStateOfMessages());
    }
  }, [
    dispatch,
    readyToSave,
    userLogged.email,
    userLogged.name,
    userLogged.password
  ]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          {isEdit ? (
            <form action="submit">
              <InputProfile
                text="Name"
                type="text"
                value={name}
                onChange={nameChangeHandler}
                message={nameMessage}
              />
              <InputProfile
                text="Email"
                type="text"
                value={email}
                onChange={emailChangeHandler}
                message={emailMessage}
              />
              <InputProfile
                text="Password"
                type="password"
                value={password}
                onChange={passwordChangeHandler}
                message={passwordMessage}
              />
              <Button onClick={saveHandler}>
                Save
                <AiFillSave />
              </Button>
            </form>
          ) : (
            <>
              <InputProfile
                text="Name"
                type="text"
                value={userLogged.name}
                disabled
              />
              <InputProfile
                text="Email"
                type="text"
                value={userLogged.email}
                disabled
              />
              <InputProfile
                text="Password"
                type="password"
                value={userLogged.password}
                disabled
              />
              <Button onClick={editHandler}>
                Edit
                <AiFillEdit />
              </Button>
            </>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
}
