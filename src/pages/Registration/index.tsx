import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { useNavigate } from 'react-router-dom';

export function Registration() {
  const navigate = useNavigate();
  return (
    <AuthComponent>
      <BoxAside
        title="Registration"
        buttonInsideText="Register"
        buttonOutsideText="Back"
        type="back"
        onInsideClick={() => navigate('/')}
        onOutsideClick={() => navigate(-1)}
      >
        <InputForm text="Name" type="text" />
        <InputForm text="Email" type="email" />
        <InputForm text="Password" type="password" />
      </BoxAside>
    </AuthComponent>
  );
}
