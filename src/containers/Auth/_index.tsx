/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import * as C from './components';
import { AuthContainer } from './AuthContainer/_index';
import { LeftPhotoContainer } from './LeftPhotoContainer/_index';
import { useNavigate } from 'react-router-dom';

export function Auth() {
  const isLoggedIn = localStorage.getItem('authToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, []);

  return (
    <C.Container>
      <LeftPhotoContainer />
      <AuthContainer />
    </C.Container>
  );
}
