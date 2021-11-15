import { Card } from '@components/Card';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { FilterBar, Button } from './styles';
import { useEffect } from 'react';
import { fetchGamesData } from '@store/game-actions';
import { gameActions } from '@store/game-slice';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

export function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootStateOrAny) => state.game.types);

  const navigate = useNavigate();

  const game = {
    color: '#7F3992',
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: '30/11/2020',
    price: 2.5,
    name: 'Lotofácil'
  };

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  function selectGame(name: string) {
    dispatch(gameActions.selectGame(name));
  }

  function navigateToNewBetPage() {
    navigate('/new-bet');
  }

  return (
    <LoggedComponent>
      <div>
        <FilterBar>
          <h2>RECENT GAMES</h2>
          <p>Filters</p>

          <div>
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
          </div>
        </FilterBar>

        <Card game={game} />
        <Card game={game} />
      </div>

      <div>
        <Button onClick={navigateToNewBetPage}>
          New Bet <HiArrowRight />
        </Button>
      </div>
    </LoggedComponent>
  );
}
