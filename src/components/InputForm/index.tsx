import { Container, Input, Message } from './styles';

interface InputProps {
  text: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  isTheFirst?: boolean;
}

export const InputForm: React.FC<InputProps> = ({
  text,
  type,
  value,
  onChange,
  message,
  isTheFirst
}) => {
  return (
    <Container>
      <Input
        placeholder={text}
        type={type}
        value={value}
        onChange={onChange}
        isTheFirst={isTheFirst}
      />
      {message && <Message>{message}</Message>}
    </Container>
  );
};
