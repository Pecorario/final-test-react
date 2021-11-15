import { Btn } from './styles';

interface GameButtonProps {
  onClick?: () => void;
  color: string;
  text: string;
  selected: boolean;
}

export const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  color,
  text,
  selected
}) => {
  return (
    <Btn onClick={onClick} color={color} selected={selected}>
      {text}
    </Btn>
  );
};
