import styled from "styled-components";

export const ContainerGrid = styled.div`
  background-color: ${props => props.theme.colors.backgroundBody};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
  "HEADER"
  "CONTENT"
  "FOOTER";
  height: 100%;
  min-height: 100vh;
  position: relative;
  transition: all .2s ease;
`;