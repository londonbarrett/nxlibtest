import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ScheissetestProps {}

const StyledScheissetest = styled.div`
  color: pink;
`;

export function Scheissetest(props: ScheissetestProps) {
  return (
    <StyledScheissetest>
      <h1>Welcome to Scheissetest!</h1>
    </StyledScheissetest>
  );
}

export default Scheissetest;
