import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: fit-content;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  border: 1px solid #e2e2e2;

  & h2 {
    margin: 2rem 0 2rem 1.2rem;

    font-size: 1.5rem;
    font-style: italic;
    color: #707070;
  }

  @media (max-width: 1100px) {
    border-radius: 10px 10px 0 0;
    border: none;
    border-top: 1px solid #e2e2e2;

    position: absolute;
    width: 100vw;
    height: 12rem;
    left: 0;
    bottom: 5rem;

    flex-direction: row;

    & h2 {
      font-size: 1.2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const CartResponsiveContainer = styled.div``;

export const Items = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  /* max-height: 22.125rem; */
  max-height: 14.8rem;
  overflow-y: auto;

  @media (max-width: 1100px) {
    height: 6rem;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const EmptyCart = styled.span`
  display: inline-block;
  color: #ff0000;
  margin-bottom: 1.6rem;

  @media (max-width: 1100px) {
    margin-top: 2rem;
  }
`;

export const TotalPrice = styled.h3`
  margin: 0.5rem 0 2.9rem 1.2rem;

  font-size: 1.5rem;
  font-weight: lighter;
  color: #707070;

  & strong {
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: 1100px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const SaveContent = styled.div`
  height: 6rem;
  width: 100%;

  background: #f4f4f4;
  border-top: 1px solid #e2e2e2;
  border-radius: 0 0 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 12rem;
    height: 100%;
    border-radius: 0 10px 0 0;
    border-left: 1px solid #e2e2e2;
  }
`;

export const SaveButton = styled.button`
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  color: #27c383;

  display: flex;
  align-items: center;

  & svg {
    color: #27c383;
    font-size: 1.875rem;
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1100px) {
    font-size: 1.8rem;

    & svg {
      font-size: 1.5rem;
    }
  }
`;
