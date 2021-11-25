import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: 0.8rem;

  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`;

export const Input = styled.input`
  height: 5rem;
  width: 100%;
  padding: 0 1.875rem;
  border: 2px solid #ebebeb;
  border-radius: 14px;
  font-size: 1.0625rem;

  &::placeholder {
    font-size: 1.0625rem;
    font-weight: bold;
    font-style: italic;
    color: #9d9d9d;
  }

  &:disabled {
    background-color: transparent;
  }
`;

export const Message = styled.span`
  position: absolute;
  left: 1.875rem;
  bottom: 0.9375rem;
  font-size: 0.75rem;
  color: red;
`;
