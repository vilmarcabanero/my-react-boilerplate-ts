import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  // children: JSX.Element[] | JSX.Element;
}

export function LoginButton(props: Props) {
  return (
    <StyledLoginButton color="primary" variant="contained" type="submit">
      Login
    </StyledLoginButton>
  );
}

const StyledLoginButton = styled(Material.Button)``;
