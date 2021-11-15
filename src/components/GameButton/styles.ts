import styled from 'styled-components';

interface StyledButtonProps {
  color: string;
  selected: boolean;
}

export const Btn = styled.button<StyledButtonProps>`
  width: 7.0625rem;
  height: 2.125rem;

  border-radius: 100px;
  border: 2px solid ${props => props.color};

  font-size: 0.875rem;
  font-weight: bold;
  font-style: italic;
  color: ${props => (props.selected ? '#FFF' : props.color)};
  background: ${props => (props.selected ? props.color : '')};

  &:hover {
    background: ${props => props.color};
    color: #f7f7f7;
  }
`;
