import { Header } from '@components/Header';
import { Container } from './styles';

export const LoggedComponent: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
