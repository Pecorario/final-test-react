import styled from 'styled-components';

export const ContainerAuth = styled.div`
  height: calc(100vh - 79.5px);
  display: flex;
  justify-content: space-around;

  @media (min-width: 1100px) {
    margin: 0 10%;
  }
`;

export const ContainerLogged = styled.div`
  display: flex;
  justify-content: space-between;

  height: calc(100vh - 159px);
  padding: 70.5px 195px 50px 130px;
`;
