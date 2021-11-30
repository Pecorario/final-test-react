import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

import { Btn } from './styles';

interface ButtonProps {
  onClick?: (event: React.FormEvent) => void | undefined;
  type: 'back' | 'forward' | 'registration';
  text: string;
  marginNumber?: string;
  submit?: boolean;
  dataCy?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  text,
  marginNumber,
  submit = false,
  dataCy
}) => {
  return (
    <Btn
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      color={type}
      marginNumber={marginNumber}
      data-cy={dataCy}
    >
      {type === 'back' && <HiArrowLeft />}
      {text}
      {(type === 'forward' || type === 'registration') && <HiArrowRight />}
    </Btn>
  );
};
