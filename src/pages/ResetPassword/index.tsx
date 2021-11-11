import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';

export function ResetPassword() {
  return (
    <BoxAside
      title="Reset password"
      buttonInsideText="Send Link"
      buttonOutsideText="Back"
    >
      <InputForm text="Email" type="email" />
    </BoxAside>
  );
}
