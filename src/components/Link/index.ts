import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: ${(p: any) => p.theme.palette.primary.main};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
