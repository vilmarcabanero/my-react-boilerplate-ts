import * as React from 'react';
import { LoginForm } from './LoginForm';
import * as C from './components';

export function Auth() {
  return (
    <C.Container>
      <LoginForm />
    </C.Container>
  );
}
