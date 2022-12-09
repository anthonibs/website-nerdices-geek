import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";
import { dark, light } from "./styles/themes";


function App() {

	const { theme, setTheme } = useTheme();

	function handleToggleTheme() {
		setTheme(theme.title === "dark" ? light : dark);
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<GlobalStyles />
				<header className="App-header">
					<p>
            Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
            Learn React
					</a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt exercitationem aspernatur blanditiis aliquid nostrum quas repudiandae natus ex, rerum provident omnis, magni, vitae veritatis laborum. Non animi ipsa consequuntur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum minima inventore consequuntur, dicta sunt laborum delectus amet qui deserunt facere, accusamus repellat distinctio accusantium ipsam esse perferendis quia soluta.
				</header>
				<button
					onClick={handleToggleTheme}
				>Trocar de cor</button>
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
