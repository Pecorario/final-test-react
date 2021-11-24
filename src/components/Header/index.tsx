import { useLocation, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

import { HiArrowRight } from 'react-icons/hi';

import {
  Container,
  Session,
  ContentTitle,
  LinkTo,
  Title,
  Button,
  Content
} from './styles';

export const Header: React.FC = () => {
  const { name } = useSelector(
    (state: RootStateOrAny) => state.auth.userLogged
  );

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const firstName = name.split(' ').slice(0, 1);

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>TGL</Title>
          {path === '/new-bet' && <LinkTo to="/home">Home</LinkTo>}
        </ContentTitle>
        <Session>
          <span>{firstName}</span>
          <Button onClick={() => navigate('/')}>
            Log out <HiArrowRight />
          </Button>
        </Session>
      </Content>
    </Container>
  );
};
