import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 5rem;
  width: 100%;
  border-bottom: 2px solid #ebebeb;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 1.875rem;

  font-size: 1.0625rem;

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
