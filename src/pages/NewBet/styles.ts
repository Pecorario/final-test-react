import styled from 'styled-components';

export const Container = styled.div`
  width: 705px;
  max-height: 100%;
  margin-right: 10px;

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

export const BetNumber = styled.button`
  width: 65px;
  height: 65px;
  margin-bottom: 20px;
  background: #adc0c4;
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

  &:hover {
    background: #fff;
    border: 1px solid #27c383;

    color: #27c383;
  }
`;

export const Cart = styled.div`
  min-width: 317px;
  height: fit-content;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  border: 1px solid #e2e2e2;

  & h2 {
    margin: 32px 0 32px 19px;

    font-size: 24px;
    font-style: italic;
    color: #707070;
  }
`;

export const Items = styled.div`
  margin-left: 19px;
  margin-right: 19px;
  max-height: 354px;
  overflow-y: auto;
`;

export const TotalPrice = styled.h3`
  margin: 8px 0 47px 19px;

  font-size: 24px;
  font-weight: lighter;
  color: #707070;

  & strong {
    font-style: italic;
  }
`;

export const SaveContent = styled.div`
  height: 96px;
  width: 100%;

  background: #f4f4f4;
  border-top: 1px solid #e2e2e2;
  border-radius: 0 0 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveButton = styled.button`
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  color: #27c383;

  display: flex;
  align-items: center;
`;