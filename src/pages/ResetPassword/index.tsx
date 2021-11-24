import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authActions } from '@store/auth-slice';

import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { Footer } from '@components/Footer';
import { InputForm } from '@components/InputForm';

export function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailMessage = useSelector(
    (state: RootStateOrAny) => state.auth.emailMessage
  );
  const isMessageInitial = useSelector(
    (state: RootStateOrAny) => state.auth.isMessageInitial
  );

  const [email, setEmail] = useState('');

  const readyToSubmit = emailMessage === '' && !isMessageInitial;

  useEffect(() => {
    dispatch(authActions.resetMessages());
  }, [dispatch]);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(
      authActions.validateInput({
        type: 'emailReset',
        value: event.target.value
      })
    );
  };

  function resetPasswordHandler(event: React.FormEvent) {
    event.preventDefault();
    dispatch(authActions.resetPassword(email));
    setEmail('');
  }

  useEffect(() => {
    if (readyToSubmit) {
      setEmail('');
      dispatch(authActions.defineInitialStateOfMessages());
      navigate('/');
    }
  }, [dispatch, navigate, readyToSubmit]);

  return (
    <>
      <AuthComponent>
        <BoxAside
          title="Reset password"
          buttonInsideText="Send Link"
          buttonOutsideText="Back"
          type="back"
          onInsideClick={resetPasswordHandler}
          onOutsideClick={() => navigate(-1)}
        >
          <InputForm
            text="Email"
            type="email"
            isTheFirst={true}
            value={email}
            onChange={emailChangeHandler}
            message={emailMessage}
          />
        </BoxAside>
      </AuthComponent>
      <Footer />
    </>
  );
}
