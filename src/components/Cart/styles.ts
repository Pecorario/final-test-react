import styled from 'styled-components';

export const Container = styled.div`
  width: 317px;
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

  span {
    display: inline-block;
    color: #ff0000;
    margin-bottom: 25px;
  }
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

  & svg {
    color: #27c383;
    font-size: 30px;
    margin-left: 1rem;
  }
`;
