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

export const CardCart: React.FC<CardProps> = ({ game }) => {
  return (
    <Container>
      <Info color={game.color}>
        <Numbers>{game.numbers.toString().replace(/,/g, ', ')}</Numbers>
        <Name color={game.color}>
          <span>{game.name}</span> R$ {game.price.toFixed(2)}
        </Name>
      </Info>
    </Container>
  );
};
