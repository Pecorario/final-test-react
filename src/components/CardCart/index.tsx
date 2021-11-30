import { useDispatch } from 'react-redux';

import { gameActions } from '@store/game-slice';
import { getMoneyInReal } from '../../shared/helpers/utils';

import { IoTrashOutline } from 'react-icons/io5';

import { Container, Numbers, Info, Name, TrashButton } from './styles';

interface CardProps {
  game: {
    id: number;
    color: string;
    numbers: number[];
    date: string;
    price: number;
    name: string;
  };
  dataCy?: string;
}

export const CardCart: React.FC<CardProps> = ({ game, dataCy }) => {
  const dispatch = useDispatch();
  const formatPrice = getMoneyInReal(game.price);

  const deleteItem = () => {
    dispatch(gameActions.removeItemOnCart(game.id));
  };

  return (
    <Container data-cy={dataCy}>
      <TrashButton onClick={deleteItem}>
        <IoTrashOutline />
      </TrashButton>
      <Info color={game.color}>
        <Numbers>{game.numbers.toString().replace(/,/g, ', ')}</Numbers>
        <Name color={game.color}>
          <span>{game.name}</span> {formatPrice}
        </Name>
      </Info>
    </Container>
  );
};
