import { Btn } from './styles';

interface ButtonProps {
  onClick?: () => void;
  color: 'back' | 'forward';
  text: string;
  marginNumber?: string;
  submit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color,
  text,
  marginNumber,
  submit = false
}) => {
  return (
    <Btn
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      color={color}
      marginNumber={marginNumber}
    >
      {text}
    </Btn>
  );
};
