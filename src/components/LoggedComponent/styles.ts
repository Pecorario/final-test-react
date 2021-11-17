import styled from 'styled-components';

interface LoggedProps {
  overflow?: boolean;
}

export const Container = styled.div<LoggedProps>`
  display: flex;
  justify-content: space-between;

  height: calc(100vh - 159px);
  padding: 70.5px 190px 50px 130px;

  overflow-y: ${props => (props.overflow ? 'auto' : 'hidden')};
`;
