import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { gameActions } from '@store/game-slice';
import { getMoneyInReal } from '../../shared/helpers/utils';

import { CardCart } from '@components/index';
import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Items,
  SaveContent,
  SaveButton,
  TotalPrice,
  EmptyCart,
  CartResponsiveContainer
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useSelector(
    (state: RootStateOrAny) => state.game.totalPrice
  );
  const games = useSelector((state: RootStateOrAny) => state.game.games);
  const savedSuccessfully = useSelector(
    (state: RootStateOrAny) => state.game.savedSuccessfully
  );

  const formatPrice = getMoneyInReal(totalPrice);

  function saveGame() {
    dispatch(gameActions.saveGame());
  }

  useEffect(() => {
    if (savedSuccessfully) {
      dispatch(gameActions.resetSavedSuccessfully());
      navigate('/home');
    }
  }, [navigate, savedSuccessfully, dispatch]);

  return (
    <Container>
      <CartResponsiveContainer>
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
          <strong>CART</strong> TOTAL: <span>{formatPrice}</span>
        </TotalPrice>
      </CartResponsiveContainer>
      <SaveContent>
        <SaveButton onClick={saveGame}>
          Save <HiArrowRight />
        </SaveButton>
      </SaveContent>
    </Container>
  );
};
