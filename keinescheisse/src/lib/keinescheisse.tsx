import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface KeinescheisseProps {}

const StyledKeinescheisse = styled.div`
  color: pink;
`;

export function Keinescheisse(props: KeinescheisseProps) {
  return (
    <StyledKeinescheisse>
      <h1>Welcome to Keinescheisse!</h1>
    </StyledKeinescheisse>
  );
}

export default Keinescheisse;
