// import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

interface Props {
  // children: React.ReactNode;
  p: any;
}

export function PasswordInput(props: Props) {
  return (
    <StyledPasswordInput
      name="Password"
      type="password"
      value={props.p.password}
      placeholder="Enter password"
      variant="outlined"
      size="small"
      fullWidth
      onChange={e => props.p.setPassword(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
}

const StyledPasswordInput = styled(TextField)``;
