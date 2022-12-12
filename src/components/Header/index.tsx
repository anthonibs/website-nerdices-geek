import { HeaderMain, MenuHamburger, Navigating } from "./styles";

import logo from "../../assets/svg/logo-nerdices-geek.svg";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { dark, light } from "../../styles/themes";

import { IoIosSunny, IoIosPartlySunny } from "react-icons/io";
import { BiArrowToTop, BiMenu } from "react-icons/bi";

import { useEffect, useRef, useState } from "react";

const Header = () => {

  const { theme, setTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [isMenu, setIsMenu] = useState(true);

  const cbRef = useRef(toggleVisible);

  useEffect(() => {
    cbRef.current = toggleVisible;
  });

  useEffect(() => {
    const cb = () => cbRef.current();
    window.addEventListener("scroll", cb);

    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);


  function handleToggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function handleToggleMenu() {
    console.log("Abrir menu!");
    setIsMenu(!isMenu);
  }

  console.log(isMenu);
  return (
    <HeaderMain>
      <img src={logo} alt="Logo Nerdices Geek" />

      <MenuHamburger onClick={handleToggleMenu}>
        <BiMenu size={28} />
      </MenuHamburger>

      <Navigating isMenu={isMenu}>
        <ul>
          <div>
            <button
              id="btnTheme"
              onClick={handleToggleTheme}
            >
              {theme.title === "dark" ? <IoIosSunny size={24} /> : <IoIosPartlySunny size={24} />}
            </button>

            <button>
              Minha Conta
            </button>
          </div>

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
      </Navigating>

      {visible && (
        <button onClick={scrollToTop}
          id="arrow-up"
        >
          <BiArrowToTop size={24} />
        </button>
      )}
    </HeaderMain >
  );
};

export default Header;