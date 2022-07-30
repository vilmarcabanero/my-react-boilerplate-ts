import * as React from 'react';
import styled from '@emotion/styled';

export function Logo() {
  return (
    <Wrapper>
      <Title>Fiona</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${(p: any) => p.theme.palette.primary.main};
  font-weight: bold;
  margin-right: 1rem;
`;
