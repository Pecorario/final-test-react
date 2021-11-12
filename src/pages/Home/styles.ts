import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;

  & h2 {
    font-size: 24px;
    font-style: italic;
    color: #707070;
    margin-right: 45px;
  }

  & p {
    font-size: 17px;
    font-style: italic;
    color: #868686;
    margin-right: 15px;
  }

  & button + button {
    margin-left: 25px;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  color: #b5c401;

  display: flex;
  align-items: center;

  & svg {
    margin-left: 10px;
  }
`;
