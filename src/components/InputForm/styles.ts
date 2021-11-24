import styled from 'styled-components';
interface InputProps {
  isTheFirst?: boolean;
}

export const Container = styled.div`
  position: relative;
  height: 5rem;
  width: 100%;
  border-bottom: 2px solid #ebebeb;
`;

export const Input = styled.input<InputProps>`
  height: 100%;
  width: 100%;
  padding: 0 1.875rem;

  font-size: 1.0625rem;
  border-radius: ${props => props.isTheFirst && '14px 14px 0 0'};

  &::placeholder {
    font-size: 1.0625rem;
    font-weight: bold;
    font-style: italic;
    color: #9d9d9d;
  }
`;

export const Message = styled.span`
  position: absolute;
  left: 1.875rem;
  bottom: 0.9375rem;
  font-size: 0.75rem;
  color: red;
`;
