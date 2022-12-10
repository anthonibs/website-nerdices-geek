import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes";
import { useTheme } from "./hooks/useTheme";
import { dark, light } from "./styles/themes";


function App() {

  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
