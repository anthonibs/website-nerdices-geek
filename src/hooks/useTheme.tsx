import { createContext, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";

import { dark, light } from "../styles/themes";
import IChildrenProps from "../types/children";


interface IThemeContext {
  theme: DefaultTheme;
  handleToggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: IChildrenProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    // Verifica se existe alguma chave salva no localStorage salva e se tiver busca o tema salvo
    const themeSaved = localStorage.getItem("@nerdices-geek:theme");
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      // Tema padrão da aplicação caso não exista ainda salvo no localStorage
      return dark;
    }

  });

  function handleToggleTheme() {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@nerdices-geek:theme", JSON.stringify(light));
    }
    if (theme.title === "light") {
      setTheme(dark);
      localStorage.setItem("@nerdices-geek:theme", JSON.stringify(dark));
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
