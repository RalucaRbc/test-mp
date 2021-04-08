import styled from "styled-components";

export const StyledWrappper = styled.div`
  border: 2px solid grey;
  margin: 20px 0;
  width: 500px;
  display: grid;
  grid-template-columns: 50px 1fr 20px;
  grid-template-rows: auto auto;
`;

export const StyledTitle = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const StyledSubtitle = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;  
`;

export const StyledLogo = styled.div`
  grid-column: 1/2;
  width: auto;
`;

export const StyledArrow = styled.i`
  grid-column: 3/4;
`;
