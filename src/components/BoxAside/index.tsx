import { Box } from '@components/Box';
import { Button } from '@components/Button';

import { Container } from './styles';

interface BoxAsideProps {
  title: string;
  buttonInsideText: string;
  buttonOutsideText: string;
  onInsideClick?: () => void;
  onOutsideClick?: () => void;
}

export const BoxAside: React.FC<BoxAsideProps> = ({
  children,
  title,
  buttonInsideText,
  buttonOutsideText,
  onInsideClick,
  onOutsideClick
}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Box text={buttonInsideText} onClick={onInsideClick}>
        {children}
      </Box>
      <Button
        color="back"
        text={buttonOutsideText}
        marginNumber={'1.875rem 0 0 0'}
        onClick={onOutsideClick}
      />
    </Container>
  );
};
