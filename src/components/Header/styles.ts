import styled from "styled-components";

export const HeaderMain = styled.header`
  height: 80px;
  background: ${props => props.theme.colors.backgroundBody};
  grid-area: HEADER;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;

  img {
    display: block;
    width: 60px;
  }
`;

export const Navigating = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 1rem;

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
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
    white-space: nowrap;
    font-size: 1rem;
    background: transparent;
    border: 1px ${props => props.theme.colors.background} solid;
    color: ${props => props.theme.colors.text.default};
    padding: .3rem 1.6rem;
    border-radius: 3rem;
    transition: background .3s ease-in;

    &:hover {
      background: ${props => props.theme.colors.background}
    }

    &:active {
      background: ${props => props.theme.colors.isActive}
    }
  }
`;