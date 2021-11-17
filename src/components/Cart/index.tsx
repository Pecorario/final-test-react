import { CardCart } from '@components/CardCart';
import { gameActions } from '@store/game-slice';
import { HiArrowRight } from 'react-icons/hi';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Items,
  SaveContent,
  SaveButton,
  TotalPrice,
  EmptyCart
} from './styles';

interface GamesProps {
  id: number;
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: string;
}

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(
    (state: RootStateOrAny) => state.game.totalPrice
  );
  const games = useSelector((state: RootStateOrAny) => state.game.games);

  function saveGame() {
    dispatch(gameActions.saveGame());
  }
  return (
    <Container>
      <h2>CART</h2>

      <Items>
        {games.length > 0 ? (
          games.map((game: GamesProps) => {
            return <CardCart key={game.id} game={game} />;
          })
        ) : (
          <EmptyCart>Empty cart! :(</EmptyCart>
        )}
      </Items>

      <TotalPrice>
        <strong>CART</strong> TOTAL:{' '}
        <span>
          {totalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>
      </TotalPrice>

      <SaveContent>
        <SaveButton onClick={saveGame}>
          Save <HiArrowRight />
        </SaveButton>
      </SaveContent>
    </Container>
  );
};
