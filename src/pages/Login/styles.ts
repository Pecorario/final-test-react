import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
  margin: 1.65rem 1.69rem 0 0;
  margin-bottom: 0.65rem;

  color: #c1c1c1;
  text-align: right;
  font-size: 1.06rem;
  font-style: italic;

  &:hover {
    filter: brightness(0.8);
  }
`;
