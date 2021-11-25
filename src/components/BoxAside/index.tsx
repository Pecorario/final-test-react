import { Box, Button } from '@components/index';

import { Container } from './styles';

interface BoxAsideProps {
  title: string;
  type: 'back' | 'registration';
  buttonInsideText: string;
  buttonOutsideText: string;
  onInsideClick?: (event: React.FormEvent) => void;
  onOutsideClick?: () => void;
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
