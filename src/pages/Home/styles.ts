import styled from "styled-components";

export const TitleHero = styled.section`
  @media(min-width: 375px) {
    margin: 3rem 0;
    display: inline-block;

    h1 {
      font-size: 2rem;
      font-family: "Lexend Deca";
      color: ${props => props.theme.colors.text.primary};
    }

    p {
      color: ${props => props.theme.colors.text.third};
      font-size: .9rem;
      margin-top: 1rem;
    }
  }

  @media(min-width: 768px) {
    margin: 4rem 0;

    h1 {
      font-size: 3.6rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media(min-width: 1200px) {
    h1 {
      font-size: 3.6rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const BannerMain = styled.section`

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 260px 160px 160px;
    gap: 1rem;

  .banner-main {
    overflow: hidden;
    position: relative;
    grid-column: 1;
    grid-row: 1 ;
    border-radius: .125rem;

    a {
      &:hover > img {
        transform: scale(1.1);
      }

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        background-image: linear-gradient(0deg, ${props => props.theme.colors.backgroundBody} 8%, ${props => props.theme.colors.backgroundBody}73 50%, rgba(255,255,255, 12%) 100%);
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
        transition: transform .3s ease-in;
      }

      h2 {
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme.colors.text.default};
        position: absolute;
        bottom: 8%;
        z-index: 100;
        line-height: 1.2;
      }

      span {
        display: block;
        background:  ${props => props.theme.colors.background};
        padding: .325rem .825rem;
        border-radius: .2rem;
        position: absolute;
        left: 1rem;
        top: 1rem;
        color: ${props => props.theme.colors.link};
        font-weight: 600;
        font-size: .8rem;
        z-index: 100;
      }

      }
    }

    figure {
      a {
        font-size: .8rem;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 220px 200px;

    .banner-main {
      grid-column: 1 / 3;
      grid-row: 1 / 3;

      a {
        h2 {
          font-size: 1.4rem;
        }

        span {
          font-size: 1rem;
        }
      }
    }
  }

@media (min-width: 1200px) {
    grid-template-columns: minmax(400px, auto) minmax(200px, 300px);
    grid-template-rows: 200px 200px;
    gap: 1rem 1.6rem;

    .banner-main {
      grid-column: 1 / 2;

      a {
        h2 {
          font-size: 1.8rem;
          bottom: 10%;
        }

        span {
          font-size: 1.2rem;
        }
      }
    }
  }
`;


export const Container = styled.section`
  @media(min-width: 375px) {
    display: grid;
    margin-top: 4rem;
    gap: 2rem;
  }

  @media(min-width: 768px) {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: minmax(400px, auto) minmax(150px, 220px);
    grid-template-rows: auto;
    gap: 1rem 1.6rem;
  }

  @media(min-width: 1200px) {
    grid-template-columns: minmax(400px, auto) minmax(200px, 300px);
  }
`;


export const CardItems = styled.div`
  @media(min-width: 375px) {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 100%;
    padding-bottom: 2rem;

    a {
      visibility: hidden;
    }
  }

  @media(min-width: 768px) {
    gap: 2rem;
    height: 800px;
    overflow: auto;

    a {
      visibility: visible;
    }

    &::-webkit-scrollbar {
      width: 6px;
      scroll-behavior: smooth;
    }

    &::-webkit-scrollbar-track {
      background-color: #F74C0C15;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.background};
      border-radius: 6px;
      width: 6px;
    }
  }

  @media(min-width: 1200px) {
    height: 1000px;
    overflow: auto;
  }
`;


export const Aside = styled.aside`
  @media(min-width: 375px) {
    h2 {
      font-size: 1.2rem;
      margin-bottom: .825rem;
      color: ${props => props.theme.colors.text.primary}
    }

    hr {
      height: 5px;
      max-width: 35%;
      margin-left: 0;
      background-color: ${props => props.theme.colors.background};
      border: none;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      li {
        position: relative;
        width: 100%;
        height: auto;
      }
    }
  }

  @media(min-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }

    hr {
      max-width: 50%;
      margin-bottom: 1.6rem;
    }

    ul {
      gap: 2rem;
    }
  }
`;

export const NewsLatest = styled.section`
  @media(min-width: 375px) {
    margin-top: 3rem;
    margin-bottom:  2rem;

    h2 {
      color: ${props => props.theme.colors.text.primary};
      font-size: 1.2rem;
      font-weight: normal;
      margin-bottom: .825rem;
    }

    hr {
      height: 4px;
      max-width: 35%;
      margin-left: 0;
      background-color: ${props => props.theme.colors.background};;
      border: none;
      border-radius: 10px;
      margin-bottom: 1.6rem;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: .625rem;

      li {

        h3 {
          font-size: .725rem;
        }

      }
    }
  }

  @media(min-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }

    ul {
      grid-template-columns: repeat(2, auto);
      gap: 1.6rem;

      li {
        h3 {
          font-size: .8rem;
        }
      }
    }
  }

  @media(min-width: 1000px) {
    ul {
      grid-template-columns: repeat(3, auto);

      li {
        h3 {
          font-size: .8rem;
        }
      }
    }
  }
`;