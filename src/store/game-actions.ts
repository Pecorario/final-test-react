import { Dispatch } from 'redux';
import { gameActions } from './game-slice';

interface GameProps {
  name: string;
  description: string;
  range: number;
  price: number;
  maxNumber: number;
  color: string;
  selected: boolean;
}

export const fetchGamesData = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch('./games.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const gamesData = await fetchData();

      const loadedGames: GameProps[] = [];

      await gamesData.types.map((item: any) => {
        return loadedGames.push({
          name: item.type,
          description: item.description,
          range: item.range,
          price: item.price,
          maxNumber: item['max-number'],
          color: item.color,
          selected: false
        });
      });

      dispatch(
        gameActions.addGames({
          minCartValue: gamesData['min-cart-value'] || 0,
          types: loadedGames || []
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
