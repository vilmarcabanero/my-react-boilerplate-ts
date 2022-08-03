import React from 'react';
import styled from '@emotion/styled';
import src from 'images/entropiya_logo_512x512.png';

interface Props {
  // children: React.ReactNode;
}

export function AuthTitleLogo(props: Props) {
  return <StyledAuthTitleLogo src={src} />;
}

const StyledAuthTitleLogo = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 8px;
`;
