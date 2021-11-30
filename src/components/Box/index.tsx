import { Button } from '@components/index';

import { Container, Content } from './styles';

interface BoxProps {
  onClick?: (event: React.FormEvent) => void;
  text: string;
  dataCy?: string;
}

export const Box: React.FC<BoxProps> = ({
  onClick,
  children,
  text,
  dataCy
}) => {
  return (
    <Container action="submit">
      <Content>{children}</Content>

      <div>
        <Button
          onClick={onClick}
          type="forward"
          text={text}
          submit
          dataCy={dataCy}
        />
      </div>
    </Container>
  );
};
