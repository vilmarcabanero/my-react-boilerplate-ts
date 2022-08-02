// import React from 'react';
import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  // children: React.ReactNode;
  p: any;
}

export function EmailInput(props: Props) {
  return (
    <StyledEmailInput
      name="email"
      value={props.p.email}
      placeholder="Enter your email"
      label="Email"
      variant="standard"
      onChange={e => props.p.setEmail(e.target.value)}
      sx={{ mb: 1 }}
    />
  );
}

const StyledEmailInput = styled(Material.TextField)``;
