import { Card } from '@components/Card';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import { FilterBar, Button } from './styles';
import { useCallback, useEffect, useState } from 'react';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}
interface GamesProps {
  minCartValue: number;
  types: GameProps[];
}

export function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState<GamesProps>();

  const game = {
    color: '#7F3992',
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: '30/11/2020',
    price: 2.5,
    name: 'Lotofácil'
  };

  const fetchGamesHandles = useCallback(async () => {
    try {
      const response = await fetch('./games.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedGames: GamesProps = {
        minCartValue: data['min-cart-value'],
        types: []
      };

      await data.types.map((item: any) => {
        return loadedGames.types.push({
          name: item.type,
          description: item.description,
          range: item.range,
          price: item.price,
          maxNumber: item['max-number'],
          color: item.color,
          selected: false
        });
      });

      setGames(loadedGames);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchGamesHandles();
  }, [fetchGamesHandles]);

  return (
    <LoggedComponent>
      <div>
        <FilterBar>
          <h2>RECENT GAMES</h2>
          <p>Filters</p>

          <div>
            {games?.types.map((game: GameProps) => {
              return (
                <GameButton
                  key={game.name}
                  color={game.color}
                  text={game.name}
                />
              );
            })}
          </div>
        </FilterBar>

        <Card game={game} />
        <Card game={game} />
      </div>

      <div>
        <Button onClick={() => navigate('/new-bet')}>
          New Bet <HiArrowRight />
        </Button>
      </div>
    </LoggedComponent>
  );
}
