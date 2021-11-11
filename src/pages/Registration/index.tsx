import { BoxAside } from '@components/BoxAside';
import { InputForm } from '@components/InputForm';

export function Registration() {
  return (
    <BoxAside
      title="Registration"
      buttonInsideText="Register"
      buttonOutsideText="Back"
    >
      <InputForm text="Name" type="text" />
      <InputForm text="Email" type="email" />
      <InputForm text="Password" type="password" />
    </BoxAside>
  );
}
