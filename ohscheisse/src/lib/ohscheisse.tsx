import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface OhscheisseProps {}

const StyledOhscheisse = styled.div`
  color: pink;
`;

export function Ohscheisse(props: OhscheisseProps) {
  return (
    <StyledOhscheisse>
      <h1>Welcome to Ohscheisse!</h1>
    </StyledOhscheisse>
  );
}

export default Ohscheisse;
