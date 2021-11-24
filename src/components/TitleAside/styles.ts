import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 4.06rem;
    color: #707070;
    text-align: center;
    font-style: italic;
  }

  & h1 {
    font-size: 5.2rem;
    color: #707070;
    text-align: center;
    font-style: italic;
  }

  @media (max-width: 600px) {
    & h2 {
      font-size: 2.5rem;
    }

    & h1 {
      font-size: 3.5rem;
    }
  }
`;

export const Separator = styled.span`
  background: #b5c401;
  height: 2.4rem;
  width: 9rem;
  border-radius: 100px;

  margin: 1.875rem 0 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.375rem;
  color: #fff;
  font-weight: bold;
  font-style: italic;

  @media (max-width: 600px) {
    margin: 1rem 0 0.5rem 0;

    height: 1.5rem;
    width: 5rem;
    font-size: 1rem;
  }
`;
