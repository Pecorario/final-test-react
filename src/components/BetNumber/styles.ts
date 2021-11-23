import styled from 'styled-components';

interface ButtonProps {
  color: string;
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 3.75rem;
  height: 3.75rem;
  margin-bottom: 1.25rem;
  background: ${props => (props.selected ? props.color : '#adc0c4')};
  border-radius: 50%;

  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 502.4px) {
    margin: 0.2rem;
  }

  @media screen and (min-width: 502.5px) {
    & + button {
      margin-left: 0.75rem;
    }

    &:nth-child(3n) {
      margin-right: 0.5rem;
    }

    &:nth-child(9n + 1) {
      margin-left: 0;
    }

    &:hover {
      background: ${props => props.color};
      filter: opacity(0.5);
    }
  }
`;
