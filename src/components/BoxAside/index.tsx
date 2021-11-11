import { Box } from '@components/Box';
import { Button } from '@components/Button';

import { Container } from './styles';

interface BoxAsideProps {
  title: string;
  buttonInsideText: string;
  buttonOutsideText: string;
}

export const BoxAside: React.FC<BoxAsideProps> = ({
  children,
  title,
  buttonInsideText,
  buttonOutsideText
}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Box text={buttonInsideText}>{children}</Box>
      <Button
        color="back"
        text={buttonOutsideText}
        marginNumber={'1.875rem 0 0 0'}
      />
    </Container>
  );
};
