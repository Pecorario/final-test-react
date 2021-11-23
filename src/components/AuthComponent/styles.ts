import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 10rem);
  display: flex;
  justify-content: space-around;

  @media (min-width: 1100px) {
    margin: 0 10%;
  }
`;
