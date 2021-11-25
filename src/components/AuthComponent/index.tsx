import { TitleAside } from '@components/index';

import { Container } from './styles';

export const AuthComponent: React.FC = ({ children }) => {
  return (
    <Container>
      <TitleAside />
      {children}
    </Container>
  );
};
