import styled from "styled-components";

interface IProps {
  expandImage: boolean;
}

export const Figure = styled.figure<IProps>`

  @media(min-width: 375px) {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: .125rem;

    a {
      position: absolute;
      background:  ${props => props.theme.colors.background};
      padding: .325rem .825rem;
      border-radius: .2rem;
      left: .6rem;
      top: .6rem;
      font-weight: 600;
      font-size: .825rem;
      color: ${props => props.theme.colors.link};
      z-index: 100;
    }

    img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      display: block;
      object-position: center;
      object-fit: cover;
      transition: transform .3s ease-in;
      cursor: pointer;
  }

    &:hover > img {
      ${props => props.expandImage === true
    ? "transform: scale(1.1);}"
    : ""};
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      background-image: linear-gradient(0deg, ${props => props.theme.colors.backgroundBody} 2%, ${props => props.theme.colors.backgroundBody}73 30%, rgba(255,255,255, 6%) 100%);
    }

    h3 {
      position: absolute;
      bottom: 10px;
      font-size: .9rem;
      padding: 0 1rem;
      font-weight: 600;
      line-height: normal;
      color: ${props => props.theme.colors.text.secondary};
      z-index: 100;
    }
}
`;