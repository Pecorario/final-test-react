import styled from 'styled-components';

export const Container = styled.div`
  width: 670px;
  max-height: calc(100vh - 159px);
  overflow-y: auto;
  margin-right: 10px;

  &::-webkit-scrollbar {
    width: 0px;
  }

  & h2 {
    font-size: 24px;
    font-weight: normal;
    font-style: italic;
    color: #707070;
    margin-bottom: 33px;
  }

  & p {
    font-size: 17px;
    font-weight: bold;
    font-style: italic;
    color: #868686;
  }

  & p + span {
    font-size: 17px;
    font-style: italic;
    color: #868686;
  }
`;

export const GamesType = styled.div`
  margin-top: 20px;
  margin-bottom: 28px;

  button + button {
    margin-left: 25px;
  }
`;

export const ContentNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 27px;
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

export const BetButton = styled.button`
  border-radius: 10px;
  border: 1px solid #27c383;
  height: 52px;
  padding: 0 23px;

  font-size: 16px;
  color: #27c383;

  &:hover {
    background: #27c383;
    color: #fff;
  }

  & + button {
    margin-left: 25px;
  }
`;

export const AddButton = styled.button`
  width: 209px;
  height: 52px;
  background: #27c383;
  border-radius: 10px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #fff;
    border: 1px solid #27c383;

    color: #27c383;
  }

  & svg {
    font-size: 26px;
    margin-right: 28px;
  }
`;
