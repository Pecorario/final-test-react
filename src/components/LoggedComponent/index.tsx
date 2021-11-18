import { Header } from '@components/Header';
import { Container } from './styles';

interface LoggedProps {
  overflow?: boolean;
}

export const LoggedComponent: React.FC<LoggedProps> = ({
  children,
  overflow = false
}) => {
  return (
    <>
      <Header />
      <Container overflow={overflow}>{children}</Container>
    </>
  );
};
