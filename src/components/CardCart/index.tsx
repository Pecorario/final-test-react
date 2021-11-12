import { Container, Numbers, Info, Name, TrashButton } from './styles';
import { IoTrashOutline } from 'react-icons/io5';
interface CardProps {
  game: {
    color: string;
    numbers: number[];
    date: string;
    price: number;
    name: string;
  };
}

export const CardCart: React.FC<CardProps> = ({ game }) => {
  return (
    <Container>
      <TrashButton>
        <IoTrashOutline />
      </TrashButton>
      <Info color={game.color}>
        <Numbers>{game.numbers.toString().replace(/,/g, ', ')}</Numbers>
        <Name color={game.color}>
          <span>{game.name}</span> R$ {game.price.toFixed(2)}
        </Name>
      </Info>
    </Container>
  );
};
