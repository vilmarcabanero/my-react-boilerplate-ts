// import React from 'react';
import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function Title(props: Props) {
  return <StyledLoginTitle color="primary">Login</StyledLoginTitle>;
}

const StyledLoginTitle = styled(Material.Typography)``;
