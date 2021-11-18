import { Btn } from './styles';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

interface ButtonProps {
  onClick?: (event: React.FormEvent) => void | undefined;
  type: 'back' | 'forward' | 'registration';
  text: string;
  marginNumber?: string;
  submit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  text,
  marginNumber,
  submit = false
}) => {
  return (
    <Btn
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      color={type}
      marginNumber={marginNumber}
    >
      {type === 'back' && <HiArrowLeft />}
      {text}
      {(type === 'forward' || type === 'registration') && <HiArrowRight />}
    </Btn>
  );
};
