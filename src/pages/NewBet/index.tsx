import { Cart } from '@components/Cart';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { gameActions } from '@store/game-slice';
import { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import {
  Container,
  GamesType,
  ContentNumbers,
  BetNumber,
  ContentButtons,
  BetButton,
  AddButton
} from './styles';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

export function NewBet() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootStateOrAny) => state.game.types);
  const gameNumbers = useSelector(
    (state: RootStateOrAny) => state.game.gameNumbers
  );

  useEffect(() => {
    dispatch(gameActions.cleanGames());
  }, [dispatch]);

  let numbers: number[] = [];

  for (let i = 1; i <= gameNumbers; i++) {
    numbers.push(i);
  }

  function selectGame(name: string) {
    dispatch(gameActions.selectGame(name));
  }

  return (
    <LoggedComponent>
      <Container>
        <h2>
          <strong>NEW BET</strong> FOR <span>MEGA-SENA</span>
        </h2>
        <p>Choose a game</p>

        <GamesType>
          {games.map((game: GameProps) => {
            return (
              <GameButton
                key={game.name}
                color={game.color}
                text={game.name}
                onClick={() => selectGame(game.name)}
                selected={game.selected}
              />
            );
          })}
        </GamesType>

        {games.map((game: GameProps) => {
          if (game.selected) {
            return (
              <>
                <p>Fill your bet</p>
                <span>{game.description}</span>
              </>
            );
          } else {
            return undefined;
          }
        })}

        <ContentNumbers>
          {numbers.map(number => (
            <BetNumber key={number}>{number}</BetNumber>
          ))}
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
