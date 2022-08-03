import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

export function Container(props: Props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

const StyledContainer = styled.div``;
