import * as React from 'react';
import { LoginForm } from './LoginForm/_index';
import * as C from './components';

export function Auth() {
  return (
    <C.Container>
      <LoginForm />
    </C.Container>
  );
}
