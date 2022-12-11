import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  height: calc(100vh - 200px);
  position: absolute;
  left: 0;

  button {
    border: none;
    background: transparent;
    color: ${props => props.theme.colors.text.primary};
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding: .6rem;
    position: absolute;
    left: 50px;
    top: 20px;
    text-align: left;
    transition: transform .3s ease-in;
    width: fit-content;

    &:hover {
      transform: scale(1.1);
      color: ${props => props.theme.colors.isHover};
    }
  }
`;