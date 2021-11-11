import { Card } from '@components/Card';
import { GameButton } from '@components/GameButton';
import { LoggedComponent } from '@components/LoggedComponent';
import { useNavigate } from 'react-router-dom';

import { FilterBar, Button } from './styles';

export function Home() {
  const navigate = useNavigate();

  const game = {
    color: '#7F3992',
    numbers: [1, 2, 4, 5, 6, 7, 9, 15, 17, 20, 21, 22, 23, 24, 25],
    date: '30/11/2020',
    price: 2.5,
    name: 'Lotofácil'
  };
  return (
    <LoggedComponent>
      <div>
        <FilterBar>
          <h2>RECENT GAMES</h2>
          <p>Filters</p>

          <div>
            <GameButton color="#7F3992" text="Lotofácil" />
            <GameButton color="#01AC66" text="Mega-Sena" />
            <GameButton color="#F79C31" text="Lotomania" />
          </div>
        </FilterBar>

        <Card game={game} />
        <Card game={game} />
      </div>

      <div>
        <Button onClick={() => navigate('/new-bet')}>New Bet</Button>
      </div>
    </LoggedComponent>
  );
}
