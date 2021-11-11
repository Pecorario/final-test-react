import { AuthComponent } from '@components/AuthComponent';
import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';
import { useNavigate } from 'react-router-dom';

export function ResetPassword() {
  const navigate = useNavigate();
  return (
    <AuthComponent>
      <BoxAside
        title="Reset password"
        buttonInsideText="Send Link"
        buttonOutsideText="Back"
        onInsideClick={() => navigate('/')}
        onOutsideClick={() => navigate(-1)}
      >
        <InputForm text="Email" type="email" />
      </BoxAside>
    </AuthComponent>
  );
}
