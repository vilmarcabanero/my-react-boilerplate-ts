import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { EmailInputProps } from './_index';
interface Props {
  // children: React.ReactNode;
  p: EmailInputProps;
}

export function EmailInput(props: Props) {
  return (
    <StyledEmailInput
      name="email"
      type="text"
      value={props.p.email}
      placeholder="Enter email"
      variant="outlined"
      size="small"
      fullWidth
      onChange={e => props.p.setEmail(e.target.value)}
      sx={{ mb: 2 }}
    />
  );
}

const StyledEmailInput = styled(TextField)``;
