import { Container, Numbers, Info, Name, TrashButton } from './styles';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { gameActions } from '@store/game-slice';
interface CardProps {
  game: {
    id: number;
    color: string;
    numbers: number[];
    date: string;
    price: number;
    name: string;
  };
}

export const CardCart: React.FC<CardProps> = ({ game }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(gameActions.removeItemOnCart(game.id));
  };

  return (
    <Container>
      <TrashButton onClick={deleteItem}>
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
