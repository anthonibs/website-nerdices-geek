import styled from "styled-components";

export const TitleHero = styled.section`
  margin: 6rem 0;
  display: inline-block;

  h1 {
    font-size: 3.6rem;
    font-family: "Lexend Deca";
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    margin-top: 1rem;
  }
`;

export const BannerMain = styled.section`
  display: grid;
  grid-template-columns: minmax(400px, auto) minmax(200px, 300px);
  grid-template-rows: 200px 200px;
  gap: 1rem 1.6rem;

  .banner-main {
    overflow: hidden;
    position: relative;
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      transition: transform .3s ease-in;
      filter: grayscale(100%);
      z-index: 50;

      &:hover {
        transform: scale(1.1);
      }
    }

    h2 {
      padding: 0 8rem 0 1rem;
      font-size: 2rem;
      font-weight: bold;
      color: ${props => props.theme.colors.text.primary};
      position: absolute;
      bottom: 8%;
      line-height: 1.5;
    }

    span {
      display: block;
      background:  ${props => props.theme.colors.background};
      padding: .325rem .825rem;
      border-radius: .2rem;
      position: absolute;
      left: 1rem;
      top: 1rem;
      color: ${props => props.theme.colors.text.default};
      z-index: 100;
    }

  }

  .banner-aside {

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-position: center;
    }
  }

`;

export const Container = styled.section`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: minmax(400px, auto) minmax(200px, 300px);
  grid-template-rows: auto;
  gap: 1rem 1.6rem;
`;


export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 1000px;
  overflow-Y: auto;
  padding-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 6px;
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }


  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.background};
    border-radius: 6px;
    width: 6px;
  }
`;

export const Aside = styled.aside`
  h2 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: .825rem;
  }

  hr {
    height: 4px;
    max-width: 50%;
    margin-left: 0;
    background-color: ${props => props.theme.colors.background};;
    border: none;
    border-radius: 10px;
    margin-bottom: 1.6rem;
  }

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      position: relative;
      width: 100%;
      height: auto;
    }
  }
`;

export const NewsLatest = styled.section`
  margin-top: 3rem;
  margin-bottom:  2rem;

  h2 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: .825rem;
  }

  hr {
    height: 4px;
    max-width: 50%;
    margin-left: 0;
    background-color: ${props => props.theme.colors.background};;
    border: none;
    border-radius: 10px;
    margin-bottom: 1.6rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr 1fr;
    gap: 1.6rem;
  }
`;