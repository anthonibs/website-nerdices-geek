import styled from "styled-components";

export const FooterContainer = styled.footer`
  @media(min-width: 375px) {
    align-items: center;
    background-image: linear-gradient(180deg, ${props => props.theme.colors.backgroundBody} 0%, ${props => props.theme.colors.backgroundBody}98 60%, rgb(42, 45, 54, 40%) 100%);
    color: ${props => props.theme.colors.text.primary};
    display: flex;
    font-family: 'Inter',sans-serif;
    font-size: 1rem;
    flex-direction: column;
    grid-area: FOOTER;
    height: 120px;
    justify-content: center;
    padding: 0 2rem;
    transition: all .2s ease;
    text-align: center;
    width: 100%;

    p {
      color: ${props => props.theme.colors.text.default};
      font-size: .725rem;
      margin-top: .5rem;
    }
  }

  @media(min-width: 768px) {
    font-size: 1.4rem;

    p {
      font-size: 1rem;
    }
  }
`;