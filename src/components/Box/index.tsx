import { Button } from '@components/Button';

import { Container, Content } from './styles';

interface BoxProps {
  onClick?: (event: React.FormEvent) => void;
  text: string;
}

export const Box: React.FC<BoxProps> = ({ onClick, children, text }) => {
  return (
    <Container action="submit">
      <Content>{children}</Content>

      <div>
        <Button onClick={onClick} type="forward" text={text} submit />
      </div>
    </Container>
  );
};
