import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 10rem);

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.6rem;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 28rem;
`;

export const Button = styled.button`
  border-radius: 14px;
  width: 50%;
  height: 3rem;
  background: #b5c401;

  font-size: 1rem;
  font-weight: bold;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.95);
  }

  & svg {
    margin-left: 0.6rem;
  }
`;
