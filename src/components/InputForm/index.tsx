import { Container, Input, Message } from './styles';

interface InputProps {
  text: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
}

export const InputForm: React.FC<InputProps> = ({
  text,
  type,
  value,
  onChange,
  message
}) => {
  return (
    <Container>
      <Input placeholder={text} type={type} value={value} onChange={onChange} />
      {message && <Message>{message}</Message>}
    </Container>
  );
};
