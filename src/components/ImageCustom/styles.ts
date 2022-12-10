import styled from "styled-components";

interface IProps {
  size: string;
  expandImage: any;
}

export const Figure = styled.figure<IProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  a {
    position: absolute;
    background:  ${props => props.theme.colors.background};
    padding: .325rem .825rem;
    border-radius: .2rem;
    left: .6rem;
    top: .6rem;
    font-weight: 600;
    font-size: ${props => props.size};
    color: ${props => props.theme.colors.text.default};
  }

  img {
    max-width: 100%;
    height: 100%;
    display: block;
    object-position: center;
    object-fit: cover;
    transition: transform .3s ease-in;
    cursor: pointer;

    ${props => props.expandImage === true
    ? "&:hover {transform: scale(1.1)}"
    : "" };
  }

  h3 {
    position: absolute;
    bottom: 10px;
    font-size: .9rem;
    font-weight: 600;
    left: 1rem;
    line-height: normal;
    color: ${props => props.theme.colors.text.default};
    pointer-events: none;
  }
`;