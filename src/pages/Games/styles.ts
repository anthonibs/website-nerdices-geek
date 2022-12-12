import styled from "styled-components";

export const Container = styled.main`
  @media(min-width: 375px) {
    h1 {
      font-size: 2rem;
      font-family: "Lexend Deca";
      color: ${props => props.theme.colors.text.primary};
      margin: 1.6rem 0;
    }

    p {
      color: ${props => props.theme.colors.text.default};
      margin-bottom: .825rem;
      line-height: 1.4;
      font-size: .825rem;
    }
  }

  @media(min-width: 768px) {
    h1 {
      font-size: 3.6rem;
      font-family: "Lexend Deca";
      color: ${props => props.theme.colors.text.primary};
      margin: 2.6rem 0;
    }

    p {
      color: ${props => props.theme.colors.text.default};
      margin-bottom: .825rem;
      line-height: 1.4;
      font-size: 1rem;
    }
  }
`;

export const NavigateCards = styled.ul`
  @media(min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 3rem 0;

    li {
      article {
        grid-template-columns: 1fr;
        grid-template-rows: 220px 1fr;
        gap: .325rem;
        width: 100%;
      }
    }
  }

  @media(min-width: 768px) {
    li {
      article {
        grid-template-columns: 250px 1fr;
        gap: 1.6rem;
        width: 100%;
      }
    }
  }

  @media(min-width: 1000px) {


    li {
      article {
        grid-template-columns: minmax(300px, 400px) 1fr;
      }
    }
  }
`;