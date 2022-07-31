import styled from '@emotion/styled';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function Wrapper(props: Props) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

const StyledWrapper = styled.div`
  width: 20rem;
  margin: auto;
`;
