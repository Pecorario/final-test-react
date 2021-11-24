import { TitleAside } from '@components/TitleAside';

import { Container } from './styles';

export const AuthComponent: React.FC = ({ children }) => {
  return (
    <Container>
      <TitleAside />
      {children}
    </Container>
  );
};
