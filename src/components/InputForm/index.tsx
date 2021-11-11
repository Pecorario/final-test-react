import { Input } from './styles';

interface InputProps {
  text: string;
  type: string;
}

export const InputForm: React.FC<InputProps> = ({ text, type }) => {
  return <Input placeholder={text} type={type} />;
};
