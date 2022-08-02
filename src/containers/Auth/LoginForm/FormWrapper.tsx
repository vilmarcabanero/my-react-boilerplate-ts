import React from 'react';
import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  children: React.ReactNode;
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
