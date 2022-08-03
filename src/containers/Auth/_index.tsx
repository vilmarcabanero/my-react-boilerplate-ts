import * as React from 'react';
import * as C from './components';
import { AuthContainer } from './AuthContainer/_index';
import { LeftPhotoContainer } from './LeftPhotoContainer/_index';

export function Auth() {
  return (
    <C.Container>
      <LeftPhotoContainer />
      <AuthContainer />
    </C.Container>
  );
}
