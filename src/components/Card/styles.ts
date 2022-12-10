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
      font-size: 1rem;
      font-weight: normal;
      font-family: 'Lexend Deca', sans-serif;
      margin-bottom: .6rem;
    }

    p {
      font-size: .8rem;
    }

    span {
      margin: .6rem 0;
      font-size: .8rem;
    }

    a {
      display: block;
      width: fit-content;
      margin-top: .3rem;
      background: #F74C0C;
      font-weight: 600;
      padding: 0.325rem 1rem;
      border-radius: 0.2rem;
      font-size: 12px;
      color: #F2F2F2;
    }
  }
`;