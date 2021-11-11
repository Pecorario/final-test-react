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
  return (
    <Container color={game.color}>
      <Numbers>{game.numbers.toString()}</Numbers>
      <Info>
        {game.date} - (R$ {game.price.toFixed(2)})
      </Info>
      <Name color={game.color}>{game.name}</Name>
    </Container>
  );
};
