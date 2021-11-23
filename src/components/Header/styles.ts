import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 0.125rem solid #ebebeb;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.header`
  width: 1040px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 502.4px) {
    width: 100%;
    margin: 0 2rem 0 2rem;
  }

  @media screen and (min-width: 502.5px) and (max-width: 1100px) {
    width: 41.875rem;
    margin: 0;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 0.6875rem;
  font-size: 2.75rem;
  font-style: italic;
  color: #707070;

  &:after {
    content: '';
    width: 6.6875rem;
    height: 7px;
    background: #b5c401;
    border-radius: 6px;

    position: absolute;
    top: 4.66rem;
    left: 0px;
  }
`;

export const LinkTo = styled(Link)`
  margin-left: 4.625rem;
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
  color: #707070;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
`;

export const Session = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: #707070;
    font-size: 1.25rem;
    font-weight: bold;
    font-style: italic;
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
  color: #707070;

  margin-left: 3.56rem;
  display: flex;
  align-items: center;

  & svg {
    font-size: 1.25rem;
    margin-left: 0.625rem;
    margin-bottom: 0.3rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
`;
