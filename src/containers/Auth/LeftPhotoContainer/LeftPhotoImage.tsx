import React from 'react';
import styled from '@emotion/styled';
import src from 'images/auth-left-photo.svg';

interface Props {
  // children: React.ReactNode;
}

export function LeftPhotoImage(props: Props) {
  return <StyledLeftPhotoImage src={src} />;
}

const StyledLeftPhotoImage = styled.img`
  width: 80%;
`;
