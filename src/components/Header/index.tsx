import { HeaderMain, Navigating } from "./styles";

import logo from "../../assets/svg/logo-nerdices-geek.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderMain>
      <img src={logo} alt="Logo Nerdices Geek" />
      <Navigating>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => isActive ? "active-page" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"series"}
              className={({ isActive }) => isActive ? "active-page" : ""}
            >
              Séries
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"filmes"}
              className={({ isActive }) => isActive ? "active-page" : ""}
            >
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"animes"}
              className={({ isActive }) => isActive ? "active-page" : ""}
            >
              Animes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"games"}
              className={({ isActive }) => isActive ? "active-page" : ""}
            >
              Games
            </NavLink>
          </li>
        </ul>

        <button>
          Minha Conta
        </button>
      </Navigating>
    </HeaderMain >
  );
};

export default Header;