import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import { Container, Session, ContentTitle, LinkTo, Title } from './styles';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <ContentTitle>
        <Title>TGL</Title>
        {path === '/new-bet' && <LinkTo to="/home">Home</LinkTo>}
      </ContentTitle>
      <Session>
        <span>Account</span>
        <button onClick={() => navigate('/')}>
          Log out <HiArrowRight />
        </button>
      </Session>
    </Container>
  );
};
