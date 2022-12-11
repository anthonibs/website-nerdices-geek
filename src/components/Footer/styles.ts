import styled from "styled-components";

export const FooterContainer = styled.footer`
  align-items: center;
  background-image: linear-gradient(180deg, ${props => props.theme.colors.backgroundBody} 0%, ${props => props.theme.colors.backgroundBody}98 60%, rgb(42, 45, 54, 40%) 100%);
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  font-family: 'Inter',sans-serif;
  font-size: 1.2rem;
  flex-direction: column;
  grid-area: FOOTER;
  height: 120px;
  justify-content: center;
  transition: all .2s ease;
  text-align: center;
  width: 100%;

  p {
    color: ${props => props.theme.colors.text.default};
    font-size: .9rem;
    margin-top: .5rem;
  }
`;