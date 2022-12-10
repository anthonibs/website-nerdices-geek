import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: FOOTER;
  height: 120px;
  background: ${props => props.theme.colors.backgroundBody}
  linear-gradient(180deg, #0000, #2a2d36);
  color: ${props => props.theme.colors.text.primary};
  text-align: center;
  font-family: 'Inter',sans-serif;
  font-size: 1.2rem;

  p {
    font-size: .9rem;
    margin-top: .5rem;
    color: ${props => props.theme.colors.text.default};
  }
`;