import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 79.5px);
  display: flex;
  justify-content: space-around;

  @media (min-width: 1100px) {
    margin: 0 10%;
  }
`;
