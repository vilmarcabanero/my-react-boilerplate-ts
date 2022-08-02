// import React from 'react';
import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  // children: React.ReactNode;
  p: any;
}

export function PasswordInput(props: Props) {
  return (
    <StyledPasswordInput
      name="Password"
      value={props.p.password}
      placeholder="Enter your password"
      label="Password"
      variant="standard"
      onChange={e => props.p.setPassword(e.target.value)}
      sx={{ mb: 1 }}
    />
  );
}

const StyledPasswordInput = styled(Material.TextField)``;
