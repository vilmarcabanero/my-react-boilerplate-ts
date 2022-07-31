import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  // children: JSX.Element[] | JSX.Element;
}

export function Title(props: Props) {
  return <StyledLoginTitle color="primary">Login</StyledLoginTitle>;
}

const StyledLoginTitle = styled(Material.Typography)``;
