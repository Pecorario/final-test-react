import { CardCart } from '@components/CardCart';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  GamesType,
  ContentNumbers,
  BetNumber,
  ContentButtons,
  BetButton,
  AddButton,
  Cart,
  Items,
  TotalPrice,
  SaveButton,
  SaveContent
} from './styles';

export function NewBet() {
  const game = {
    color: '#7F3992',
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: '30/11/2020',
    price: 2.5,
    name: 'Lotofácil'
  };

  let numbers = [];
  for (let i = 1; i <= 36; i++) {
    numbers.push(i);
  }

  function renderNumberButton(number: number) {
    return <BetNumber>{number}</BetNumber>;
  }

  return (
    <LoggedComponent>
      <Container>
        <h2>
          <strong>NEW BET</strong> FOR <span>MEGA-SENA</span>
        </h2>
        <p>Choose a game</p>

        <GamesType>
          <GameButton color="#7F3992" text="Lotofácil" />
          <GameButton color="#01AC66" text="Mega-Sena" />
          <GameButton color="#F79C31" text="Lotomania" />
        </GamesType>

        <p>Fill your bet</p>
        <span>
          Mark as many numbers as you want up to a maximum of 50. Win by hitting
          15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
        </span>

        <ContentNumbers>
          {numbers.map(number => renderNumberButton(number))}
        </ContentNumbers>

        <ContentButtons>
          <div>
            <BetButton>Complete game</BetButton>
            <BetButton>Clear game</BetButton>
          </div>

          <div>
            <AddButton>
              <AiOutlineShoppingCart />
              Add to cart
            </AddButton>
          </div>
        </ContentButtons>
      </Container>

      <Cart className="cart">
        <h2>CART</h2>

        <Items>
          <div>
            <CardCart game={game} />
            <CardCart game={game} />
            <CardCart game={game} />
          </div>
        </Items>

        <TotalPrice>
          <strong>CART</strong> TOTAL: <span>R$ 7,00</span>
        </TotalPrice>

        <SaveContent>
          <SaveButton>
            Save <HiArrowRight />
          </SaveButton>
        </SaveContent>
      </Cart>
    </LoggedComponent>
  );
}
