import { CardCart } from '@components/CardCart';
import { HiArrowRight } from 'react-icons/hi';
import { RootStateOrAny, useSelector } from 'react-redux';

import {
  Container,
  Items,
  SaveContent,
  SaveButton,
  TotalPrice,
  EmptyCart
} from './styles';

interface GamesProps {
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: string;
}

export const Cart: React.FC = () => {
  const totalPrice = useSelector(
    (state: RootStateOrAny) => state.game.totalPrice
  );
  const games = useSelector((state: RootStateOrAny) => state.game.games);
  return (
    <Container>
      <h2>CART</h2>

      <Items>
        {games.length > 0 ? (
          games.map((game: GamesProps, index: number) => {
            return <CardCart key={index} game={game} />;
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
        <SaveButton>
          Save <HiArrowRight />
        </SaveButton>
      </SaveContent>
    </Container>
  );
};
