import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { gameActions } from '@store/game-slice';

import { Button } from './styles';

interface BetNumberProps {
  color: string;
  number: number;
}

export const BetNumber: React.FC<BetNumberProps> = ({ color, number }) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();
  const numbers = useSelector(
    (state: RootStateOrAny) => state.game.selectedNumbers
  );

  useEffect(() => {
    if (numbers.includes(number)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [numbers, number]);

  const onClickButton = (number: number) => {
    dispatch(gameActions.addNumber(number));
  };

  return (
    <Button
      color={color}
      selected={selected}
      onClick={() => onClickButton(number)}
    >
      {number}
    </Button>
  );
};
