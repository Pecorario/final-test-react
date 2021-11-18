import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  border-bottom: 2px solid #ebebeb;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 30px;

  font-size: 17px;

  &::placeholder {
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
    color: #9d9d9d;
  }
`;

export const Message = styled.span`
  position: absolute;
  left: 30px;
  bottom: 15px;
  font-size: 12px;
  color: red;
`;
