import { getMoneyInReal } from '../../shared/helpers/utils';

import { Container, Numbers, Info, Name } from './styles';

interface CardProps {
  game: {
    color: string;
    numbers: number[];
    date: string;
    price: number;
    name: string;
  };
}

export const Card: React.FC<CardProps> = ({ game }) => {
  const formatPrice = getMoneyInReal(game.price);
  return (
    <Container color={game.color}>
      <Numbers>{game.numbers.toString().replace(/,/g, ', ')}</Numbers>
      <Info>
        {game.date} - ({formatPrice})
      </Info>
      <Name color={game.color}>{game.name}</Name>
    </Container>
  );
};
