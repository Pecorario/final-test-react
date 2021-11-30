import { Btn } from './styles';

interface GameButtonProps {
  onClick?: () => void;
  color: string;
  text: string;
  selected: boolean;
  dataCy?: string;
}

export const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  color,
  text,
  selected,
  dataCy
}) => {
  return (
    <Btn onClick={onClick} color={color} selected={selected} data-cy={dataCy}>
      {text}
    </Btn>
  );
};
