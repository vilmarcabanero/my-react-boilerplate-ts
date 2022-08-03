import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuthSlice } from '../slice';
// import { selectAuth } from '../slice/selectors';
import * as C from './components';

interface Props {}

export function LeftPhotoContainer(props: Props) {
  // const actions = useAuthSlice().actions;
  // const dispatch = useDispatch();
  // const state = useSelector(selectAuth);
  return (
    <C.Wrapper>
      <C.LeftPhotoImage />
    </C.Wrapper>
  );
}
