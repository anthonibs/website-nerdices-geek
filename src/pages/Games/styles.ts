import styled from "styled-components";

export const Container = styled.main`
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
  }
`;

export const NavigateCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 3rem 0;

  li {

    article {
      grid-template-columns: minmax(200px,300px) 1fr;
      width: 100%;
    }

  }
`;