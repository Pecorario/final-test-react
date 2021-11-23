import styled from 'styled-components';

interface LoggedProps {
  isNewBetPage?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4.6rem;

  height: calc(100vh - 10rem);

  @media (max-width: 1100px) {
    padding-top: 1rem;
  }
`;

export const Content = styled.header<LoggedProps>`
  width: 1040px;
  height: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 502.4px) {
    flex-direction: ${props => props.isNewBetPage && 'column'};
    width: 100%;
    padding: 2rem 2rem 0 2rem;
  }

  @media screen and (min-width: 502.5px) and (max-width: 1100px) {
    flex-direction: ${props => props.isNewBetPage && 'column'};
    width: 41.875rem;
    padding-top: 1rem;
  }

  @media (max-width: 1100px) {
    padding-bottom: ${props => (props.isNewBetPage ? '12rem' : '8rem')};
  }
`;
