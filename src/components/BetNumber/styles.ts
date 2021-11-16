import styled from 'styled-components';

interface ButtonProps {
  color: string;
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  background: ${props => (props.selected ? props.color : '#adc0c4')};
  border-radius: 50%;

  font-size: 20px;
  font-weight: bold;
  color: #fff;

  & + button {
    margin-left: 12px;
  }

  &:nth-child(3n) {
    margin-right: 8px;
  }

  &:nth-child(9n + 1) {
    margin-left: 0;
  }

  &:hover {
    background: ${props => props.color};
    filter: opacity(0.5);
  }
`;
