import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: space-around;

  @media (min-width: 1100px) {
    margin: 0 10%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
