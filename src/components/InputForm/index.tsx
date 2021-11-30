import { Container, Input, Message } from './styles';

interface InputProps {
  text: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  isTheFirst?: boolean;
  dataCy?: string;
}

export const InputForm: React.FC<InputProps> = ({
  text,
  type,
  value,
  onChange,
  message,
  isTheFirst,
  dataCy
}) => {
  return (
    <Container>
      <Input
        placeholder={text}
        type={type}
        value={value}
        onChange={onChange}
        isTheFirst={isTheFirst}
        data-cy={dataCy}
      />
      {message && <Message data-cy="invalid-data">{message}</Message>}
    </Container>
  );
};
