import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchGamesData } from '@store/game-actions';
import { gameActions } from '@store/game-slice';

import { Card } from '@components/Card';
import { GameButton } from '@components/GameButton';
import { NotFoundPage } from '@components/NotFoundPage';
import { Footer } from '@components/Footer';
import { LoggedComponent } from '@components/LoggedComponent';
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
  const userLogged = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );

  const [filteredGames, setFilteredGames] = useState(savedGames);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  function filterGames(name: string, selected: boolean) {
    if (selected) {
      dispatch(gameActions.resetTypes());
      setFilteredGames(savedGames);
    } else {
      dispatch(gameActions.selectGame(name));

      const filteredByName = savedGames.filter((game: GamesProps) => {
        return game.name === name;
      });

      setFilteredGames(filteredByName);
    }
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
