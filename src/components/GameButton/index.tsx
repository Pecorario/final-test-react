import { Btn } from './styles';

interface GameButtonProps {
  onClick?: () => void;
  color: string;
  text: string;
}

export const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  color,
  text
}) => {
  return (
    <Btn onClick={onClick} color={color}>
      {text}
    </Btn>
  );
};
