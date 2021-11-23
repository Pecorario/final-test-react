import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;

  & h2 {
    font-size: 1.5rem;
    font-style: italic;
    color: #707070;
    margin-right: 2.8rem;
  }

  & p {
    font-size: 1.06rem;
    font-style: italic;
    color: #868686;
    margin-right: 0.9rem;
  }

  & button + button {
    margin-left: 1.56rem;
  }

  @media (min-width: 511px) and (max-width: 1100px) {
    & button + button {
      margin-left: 0.5rem;
    }

    & h2 {
      width: 6.5rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 510px) {
    justify-content: center;
    & h2 {
      width: 6.5rem;
      margin-right: 1rem;
    }

    & button + button {
      margin-left: 0rem;
      margin-top: 0.5rem;
    }

    & div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Games = styled.div`
  height: 100%;
  padding-bottom: 3.125rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: #b5c401;

  display: flex;
  align-items: center;

  & svg {
    margin-left: 0.625rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }
`;
