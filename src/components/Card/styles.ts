import styled from 'styled-components';

interface StyleCardProps {
  color: string;
}

export const Container = styled.div<StyleCardProps>`
  position: relative;
  height: 5.875rem;
  margin: 1.875rem 0 0 0.94rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: '';
    width: 6px;
    height: 5.875rem;
    background: ${props => props.color};
    border-radius: 100px;

    position: absolute;
    top: 0;
    left: -15px;
  }
`;

export const Numbers = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
  color: #868686;
  margin-bottom: 0.94rem;
`;

export const Info = styled.p`
  font-size: 1.06rem;
  color: #868686;
  margin-bottom: 0.6875rem;
`;

export const Name = styled.p<StyleCardProps>`
  color: ${props => props.color};
  font-size: 1.25rem;
  font-weight: bold;
  font-style: italic;
`;
