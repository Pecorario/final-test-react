import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 79.5px;
  border-bottom: 2px solid #ebebeb;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 141px;
  font-size: 44px;
  font-style: italic;
  color: #707070;

  &:after {
    content: '';
    width: 107px;
    height: 7px;
    background: #b5c401;
    border-radius: 6px;

    position: absolute;
    top: 74.5px;
    left: 130px;
  }
`;

export const LinkTo = styled(Link)`
  margin-left: 74px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`;

export const Session = styled.div`
  margin-right: 170px;
  display: flex;
  align-items: center;

  & button,
  & span {
    color: #707070;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
  }

  & button {
    margin-left: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & button svg {
    font-size: 20px;
    margin-left: 10px;
  }
`;
