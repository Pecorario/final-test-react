import  styled from 'styled-components';

export const Input = styled.input`
  height: 80px;
  width: 100%;
  border-bottom: 2px solid #EBEBEB;
  padding: 0 30px;

  font-size: 17px;

  &::placeholder {
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
    color: #9D9D9D;
  }
`;