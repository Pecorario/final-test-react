import styled from 'styled-components';

interface StyleCardProps {
  color: string;
}

export const Container = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    margin-bottom: 0.5rem;
  }
`;

export const Info = styled.div<StyleCardProps>`
  position: relative;
  height: 5.375rem;
  margin-left: 1.56rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before {
    content: '';
    width: 4px;
    height: 5.375rem;
    background: ${props => props.color};
    border-radius: 100px 0 0 100px;

    position: absolute;
    top: 0;
    left: -15px;
  }
`;

export const Numbers = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.94rem;
  font-weight: bold;
  font-style: italic;
  color: #868686;
`;

export const Name = styled.p<StyleCardProps>`
  font-size: 1rem;
  color: #868686;
  margin-bottom: 0;

  span {
    margin-bottom: 0;
    font-weight: bold;
    font-style: italic;
    color: ${props => props.color};
  }
`;

export const TrashButton = styled.button`
  & svg {
    font-size: 1.5rem;
    color: #888888;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
