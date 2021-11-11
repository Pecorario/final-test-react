import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 4.06rem;
    color: #707070;
    text-align: center;
    font-style: italic;
  }

  h1 {
    font-size: 5.2rem;
    color: #707070;
    text-align: center;
    font-style: italic;
  }
`;

export const Separator = styled.span`
  background: #B5C401;
  height: 2.4rem;
  width: 9rem;
  border-radius: 100px;

  margin: 1.875rem 0 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.375rem;
  color: #FFF;
  font-weight: bold;
  font-style: italic;
`;