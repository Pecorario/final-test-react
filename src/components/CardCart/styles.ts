import styled from 'styled-components';

interface StyleCardProps {
  color: string;
}

export const Container = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

export const Info = styled.div<StyleCardProps>`
  position: relative;
  height: 86px;
  margin-left: 35px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: '';
    width: 4px;
    height: 86px;
    background: ${props => props.color};
    border-radius: 100px 0 0 100px;

    position: absolute;
    top: 0;
    left: -15px;
  }
`;

export const Numbers = styled.p`
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
`;

export const Name = styled.p<StyleCardProps>`
  font-size: 16px;
  color: #868686;

  span {
    font-weight: bold;
    font-style: italic;
    color: ${props => props.color};
  }
`;
