import styled from 'styled-components';

interface StyledButtonProps {
  color: 'back' | 'forward';
  marginNumber?: string;
}

export const Btn = styled.button<StyledButtonProps>`
  color: ${props => (props.color === 'back' ? '#707070' : '#B5C401')};
  font-size: 2.18rem;
  font-weight: bold;
  font-style: italic;

  display: flex;
  align-items: center;
  margin: ${props => props.marginNumber};
`;
