import styled from "styled-components";

export const SectionGames = styled.section`
  height: 100%;
  margin-top: 3rem;

  div {
    height: 100%;
    max-height: 360px;
    width: 100%;
  }

  h1 {
    color: ${props => props.theme.colors.text.primary};
    font-size: 2rem;
    margin: .625rem 0 .325rem;
  }

  span {
    color: ${props => props.theme.colors.text.third};
    display: block;
    margin-bottom: 2rem;
  }

  p {
    color: ${props => props.theme.colors.text.default};
    font-size: 1rem;
    margin-top: .625rem;
  }
`;