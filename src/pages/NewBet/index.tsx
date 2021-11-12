import { Cart } from '@components/Cart';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import {
  Container,
  GamesType,
  ContentNumbers,
  BetNumber,
  ContentButtons,
  BetButton,
  AddButton
} from './styles';

export function NewBet() {
  let numbers = [];
  for (let i = 1; i <= 36; i++) {
    numbers.push(i);
  }

  function renderNumberButton(number: number) {
    return <BetNumber key={number}>{number}</BetNumber>;
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

      <Cart />
    </LoggedComponent>
  );
}
