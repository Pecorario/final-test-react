import styled from 'styled-components';

interface StyledButtonProps {
  color: 'back' | 'forward' | 'registration';
  marginNumber?: string;
}

export const Btn = styled.button<StyledButtonProps>`
  color: ${props => (props.color === 'forward' ? '#B5C401' : '#707070')};
  font-size: 2.18rem;
  font-weight: bold;
  font-style: italic;

  display: flex;
  align-items: center;
  margin: ${props => props.marginNumber};

  & svg {
    font-size: 30px;
    margin-left: ${props =>
      props.color === 'forward' || props.color === 'registration'
        ? '15px'
        : ''};
    margin-right: ${props => props.color === 'back' && '1rem'};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
