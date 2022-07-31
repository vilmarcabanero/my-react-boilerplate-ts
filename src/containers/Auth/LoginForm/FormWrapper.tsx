/**
 * FormWrapper
 */

import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function FormWrapper(props: Props) {
  return (
    <StyledFormWrapper elevation={3} sx={{ p: 2 }}>
      {props.children}
    </StyledFormWrapper>
  );
}

const StyledFormWrapper = styled(Material.Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
