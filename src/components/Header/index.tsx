import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Session,
  ContentTitle,
  LinkTo,
  Title,
  Button
} from './styles';

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
        <Button onClick={() => navigate('/')}>
          Log out <HiArrowRight />
        </Button>
      </Session>
    </Container>
  );
};
