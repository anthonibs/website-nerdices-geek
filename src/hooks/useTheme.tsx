import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { DefaultTheme } from "styled-components";

import { dark } from "../styles/themes";


interface IThemeContext {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };