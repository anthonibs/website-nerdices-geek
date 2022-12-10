import styled from "styled-components";

export const ContainerGrid = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.theme.colors.backgroundBody};
  color: white;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "HEADER"
    "CONTENT"
    "FOOTER";
  position: relative;
`;