// import { CardCart } from '@components/CardCart';
import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Items,
  SaveContent,
  SaveButton,
  TotalPrice
} from './styles';

export const Cart: React.FC = () => {
  // const game = {
  //   color: '#7F3992',
  //   numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
  //   date: '30/11/2020',
  //   price: 2.5,
  //   name: 'Lotofácil'
  // };

  return (
    <Container>
      <h2>CART</h2>

      <Items>
        <span>Empty cart! :(</span>
        {/* <CardCart game={game} /> */}
      </Items>

      <TotalPrice>
        <strong>CART</strong> TOTAL: <span>R$ 7,00</span>
      </TotalPrice>

      <SaveContent>
        <SaveButton>
          Save <HiArrowRight />
        </SaveButton>
      </SaveContent>
    </Container>
  );
};
