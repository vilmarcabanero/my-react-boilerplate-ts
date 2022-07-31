import styled from '@emotion/styled';
import * as Material from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function Container(props: Props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

const StyledContainer = styled(Material.Container)``;
