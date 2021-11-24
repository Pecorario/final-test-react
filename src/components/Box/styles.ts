import styled from 'styled-components';

export const Container = styled.form`
  background: #fff;
  box-shadow: 0px 3px 25px #00000014;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 22rem;
  height: fit-content;
  border: 1px solid #dddddd;
  border-radius: 0.875rem;

  button {
    margin-top: 2.1rem;
    margin-bottom: 2.69rem;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 600px) {
      margin-top: 1.1rem;
      margin-bottom: 1.69rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
