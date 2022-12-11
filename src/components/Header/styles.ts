import styled, { keyframes } from "styled-components";

const animateScrollTop = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
    display: block;
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const HeaderMain = styled.header`
  align-items: center;
  background: ${props => props.theme.colors.backgroundBody};
  display: flex;
  font-family: 'Inter', sans-serif;
  grid-area: HEADER;
  height: 80px;
  justify-content: space-between;
  padding: 0 10%;
  position: fixed;
  transition: all .2s ease;
  width: 100%;
  z-index: 1000;

  img {
    display: block;
    width: 60px;
  }

  #arrow-up {
    animation: ${animateScrollTop} 1s ease;
    bottom: 1rem;
    border-radius: 50%;
    border: none;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.secondary};
    height: 50px;
    position: fixed;
    right: 1rem;
    width: 50px;
  }
`;

export const Navigating = styled.nav`
  display: flex;
  font-size: 1rem;
  gap: 1rem;

  ul {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-right: 3rem;

    a {
      color: ${props => props.theme.colors.text.default};
      transition: color .3s ease-in;

      &:hover {
        color: ${props => props.theme.colors.isHover};
      }
    }

    .active-page {
      color: ${props => props.theme.colors.isActive};
    }
  }

  button {
    color: ${props => props.theme.colors.text.default};
    border-radius: 3rem;
    background: transparent;
    border: 1px ${props => props.theme.colors.background} solid;
    font-size: 1rem;
    padding: .3rem 1.6rem;
    transition: background .3s ease-in;
    white-space: nowrap;

    &:hover {
      color: ${props => props.theme.colors.link};
      background: ${props => props.theme.colors.background};
    }

    &:active {
      background: ${props => props.theme.colors.isActive}
    }
  }

  #btnTheme {
    display: flex;
    background-color: transparent;
    border: none;
    padding: .3rem;
    color: ${({ theme }) => theme.colors.text.primary};
    transition: color .2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.isHover};
    }
  }

`;