import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes";
import { useTheme } from "./hooks/useTheme";

function App() {

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
