import { Box } from '@components/Box';
import { Button } from '@components/Button';

import { Container } from './styles';

interface BoxAsideProps {
  title: string;
  buttonInsideText: string;
  buttonOutsideText: string;
  onInsideClick?: () => void;
  onOutsideClick?: () => void;
  type: 'back' | 'registration';
}

export const BoxAside: React.FC<BoxAsideProps> = ({
  children,
  title,
  buttonInsideText,
  buttonOutsideText,
  onInsideClick,
  onOutsideClick,
  type
}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Box text={buttonInsideText} onClick={onInsideClick}>
        {children}
      </Box>
      <Button
        type={type}
        text={buttonOutsideText}
        marginNumber={'1.875rem 0 0 0'}
        onClick={onOutsideClick}
      />
    </Container>
  );
};
