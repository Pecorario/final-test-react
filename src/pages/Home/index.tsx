import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchGamesData } from '@store/game-actions';
import { gameActions } from '@store/game-slice';

import {
  Card,
  GameButton,
  NotFoundPage,
  Footer,
  LoggedComponent
} from '@components/index';
import { HiArrowRight } from 'react-icons/hi';

import { FilterBar, Button, Games, NoGamesSpan } from './styles';

interface TypesProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

interface GamesProps {
  id: number;
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: string;
}

export function Home() {
  const dispatch = useDispatch();
  const types = useSelector((state: RootStateOrAny) => state.game.types);
  const savedGames = useSelector(
    (state: RootStateOrAny) => state.game.savedGames
  );
  const filteredGames = useSelector(
    (state: RootStateOrAny) => state.game.filteredGames
  );
  const userLogged = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  function filterGames(name: string, selected: boolean) {
    dispatch(gameActions.filterGame(name));
  }

  function navigateToNewBetPage() {
    dispatch(gameActions.resetGameDefault());
    navigate('/new-bet');
  }

  return (
    <>
      {userLogged.isLoggedIn ? (
        <>
          <LoggedComponent>
            <div>
              <FilterBar>
                <h2>RECENT GAMES</h2>
                <p>Filters</p>

                <div>
                  {types.map((game: TypesProps) => {
                    return (
                      <GameButton
                        key={game.name}
                        color={game.color}
                        text={game.name}
                        onClick={() => filterGames(game.name, game.selected)}
                        selected={game.selected}
                      />
                    );
                  })}
                </div>
              </FilterBar>

              <Games>
                {filteredGames.length > 0 ? (
                  filteredGames.map((game: GamesProps) => {
                    return <Card key={game.id} game={game} />;
                  })
                ) : savedGames.length > 0 ? (
                  savedGames.map((game: GamesProps) => {
                    return <Card key={game.id} game={game} />;
                  })
                ) : (
                  <NoGamesSpan>No recent games found</NoGamesSpan>
                )}
              </Games>
            </div>

            <div>
              <Button onClick={navigateToNewBetPage}>
                New Bet <HiArrowRight />
              </Button>
            </div>
          </LoggedComponent>
          <Footer />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
