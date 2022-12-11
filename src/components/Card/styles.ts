import styled from "styled-components";


export const CardItem = styled.article`
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-template-rows: 150px;
  gap: 1.3rem;
  height: fit-content;
  width: 90%;

  div {
    display: grid;
    grid-template-rows: auto 1fr auto 30px;

    h3 {
      color: ${props => props.theme.colors.text.secondary};
      font-size: 1rem;
      font-weight: normal;
      font-family: 'Lexend Deca', sans-serif;
      margin-bottom: .6rem;
    }

    p {
      color:  ${props => props.theme.colors.text.third};
      font-size: .8rem;
    }

    span {
      color:  ${props => props.theme.colors.text.third};
      font-size: .8rem;
      margin: .6rem 0;
    }

    a {
      color: ${props => props.theme.colors.link};
      background:${props => props.theme.colors.background};
      border-radius: 0.2rem;
      font-size: 12px;
      font-weight: 600;
      height: fit-content;
      margin-top: .3rem;
      padding: 0.325rem 1rem;
      width: fit-content;
    }
  }
`;