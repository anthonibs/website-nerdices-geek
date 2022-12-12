import styled from "styled-components";

export const SectionGames = styled.section`
  @media(min-width:375px) {
    height: 100%;
    margin-top: 3rem;

    div {
      height: 100%;
      max-height: 180px;
      width: 100%;
    }

    h1 {
      color: ${props => props.theme.colors.text.primary};
      font-size: 1.2rem;
      margin: 0 0 .625rem;
    }

    span {
      color: ${props => props.theme.colors.text.third};
      font-size: .9rem;
      display: block;
      margin-bottom: 2rem;
    }

    p {
      color: ${props => props.theme.colors.text.default};
      font-size: .8rem;
      margin-top: .625rem;
    }
  }

  @media(min-width: 600px) {
    div {
      max-height: 220px;
    }

    h1 {
      font-size: 1.6rem;
    }

    span {
      color: ${props => props.theme.colors.text.third};
    }
  }

  @media(min-width:768px) {
    div {
      max-height: 340px;

      figure {
        img {
          object-position: top;
        }
      }
    }

    h1 {
      color: ${props => props.theme.colors.text.primary};
      font-size: 2rem;
      margin: .625rem 0 .325rem;
    }

    span {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
      margin-top: .625rem;
    }
  }
`;