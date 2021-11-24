import { Header } from '@components/Header';

import { Container, Content } from './styles';

interface LoggedProps {
  isNewBetPage?: boolean;
}

export const LoggedComponent: React.FC<LoggedProps> = ({
  children,
  isNewBetPage = false
}) => {
  return (
    <>
      <Header />
      <Container>
        <Content isNewBetPage={isNewBetPage}>{children}</Content>
      </Container>
    </>
  );
};
