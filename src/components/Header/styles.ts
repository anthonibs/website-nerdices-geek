import styled, { keyframes } from "styled-components";

interface IPropsMenu {
  isMenu: boolean;
}

const animateScrollTop = keyframes`
  from {
    display: block;
    opacity: 0;
    transform: scale(0);
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
    height: 40px;
    position: fixed;
    right: 1rem;
    width: 40px;
  }
`;

export const MenuHamburger = styled.button`
  @media(min-width: 375px) {
    display: block;
    background: transparent;
    height: 40px;
    width: fit-content;
    color: ${props => props.theme.colors.text.primary};
    border: none;
    padding: .625rem;
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 1200;
  }

  @media(min-width: 1000px) {
    display: none;
  }
`;

export const Navigating = styled.nav<IPropsMenu>`
  @media(min-width: 375px) {
    display: flex;
    font-size: 1rem;
    gap: 1rem;

    ul {
      position: fixed;
      height: 100%;
      right: 0;
      display: ${props => props.isMenu === true ? "none" : "flex"};
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1rem;
      top:0;
      width: 300px;
      padding: 6rem 3rem;
      background: ${props => props.theme.colors.backgroundBody};

      a {
        color: ${props => props.theme.colors.text.default};

        &:hover {
          color: ${props => props.theme.colors.isHover};
        }
      }

      .active-page {
        color: ${props => props.theme.colors.isActive};
      }

      div {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1rem;

        button {
          border-radius: 3rem;
          background: transparent;
          border: 1px ${props => props.theme.colors.background} solid;
          color: ${props => props.theme.colors.text.default};
          font-size: .8rem;
          padding: .3rem 1rem;
          transition: background .3s ease-in;
          white-space: nowrap;
          width: fit-content;

      &:hover {
        color: ${props => props.theme.colors.link};
        background: ${props => props.theme.colors.background};
      }

      &:active {
        background: ${props => props.theme.colors.isActive}
      }
    }

    #btnTheme {
      color: ${({ theme }) => theme.colors.text.primary};
      background-color: transparent;
      border: none;
      display: flex;
      padding: .3rem;
      transition: color .2s ease-in;

        &:hover {
          color: ${({ theme }) => theme.colors.isHover};
        }
      }
      }
    }
  }

  @media(min-width: 1000px) {
    ul {
      position: relative;
      align-items: center;
      justify-content: center;
      display: ${props => props.isMenu === true ? "flex" : "flex"};
      flex-direction: row;
      gap: 2rem;
      width: 100%;
      padding: 0;
      background: transparent;

      div {
        margin-bottom: 0;
        align-items: center;
        order: 2;

        button {
          font-size: 1rem;
          padding: .3rem 1.8rem;
        }
      }
    }
  }
`;