import styled from 'styled-components';

export const Container = styled.div`
  width: 41.875rem;
  max-height: calc(100vh - 10rem);
  overflow-y: auto;
  margin-right: 0.625rem;

  &::-webkit-scrollbar {
    width: 0px;
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
    color: #707070;
    margin-bottom: 2.06rem;
  }

  & p {
    font-size: 1.06rem;
    font-weight: bold;
    font-style: italic;
    color: #868686;
  }

  & p + span {
    font-size: 1.06rem;
    font-style: italic;
    color: #868686;
  }

  @media (max-width: 502.4px) {
    width: 100%;
  }
`;

export const GamesType = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;

  button + button {
    margin-left: 1.56rem;
  }
`;

export const ContentNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.6875rem;

  @media (max-width: 502.4px) {
    justify-content: space-between;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.94rem;
`;

export const BetButton = styled.button`
  border-radius: 10px;
  border: 1px solid #27c383;
  height: 3.25rem;
  padding: 0 1.4rem;

  font-size: 1rem;
  color: #27c383;

  &:hover {
    background: #27c383;
    color: #fff;
  }

  & + button {
    margin-left: 1.56rem;
  }

  @media (max-width: 448px) {
    height: 2.5rem;
    padding: 0 0.5rem;

    & + button {
      margin-left: 0.5rem;
    }
  }
`;

export const AddButton = styled.button`
  width: 13.06rem;
  height: 3.25rem;
  background: #27c383;
  border-radius: 10px;

  font-size: 1rem;
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
    font-size: 1.625rem;
    margin-right: 1.75rem;
  }

  @media (max-width: 448px) {
    width: 9.5rem;
    height: 2.5rem;

    & svg {
      margin-right: 1rem;
    }
  }
`;
