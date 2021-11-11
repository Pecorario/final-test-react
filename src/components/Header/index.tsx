import { useLocation } from 'react-router-dom';

import { Container, Session, ContentTitle, LinkTo, Title } from './styles';

export const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <ContentTitle>
        <Title>TGL</Title>
        {path === '/' && <LinkTo to="/home">Home</LinkTo>}
      </ContentTitle>
      <Session>
        <span>Account</span>
        <button data-js="logout">Sair</button>
      </Session>
    </Container>
  );
};
