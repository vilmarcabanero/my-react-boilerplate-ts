import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export function TitleContainer(props: Props) {
  return (
    <StyledTitleContainer sx={{ mb: 3 }}>{props.children}</StyledTitleContainer>
  );
}

const StyledTitleContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
