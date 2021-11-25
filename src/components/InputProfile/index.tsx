import { Input, Container, Label, Message } from './styles';

interface InputProps {
  text: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  message?: string;
}

export const InputProfile: React.FC<InputProps> = ({
  text,
  type,
  value,
  onChange,
  disabled = false,
  message
}) => {
  return (
    <Container>
      <Label htmlFor="text">{text}</Label>
      <Input
        id={text}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {message && <Message>{message}</Message>}
    </Container>
  );
};
