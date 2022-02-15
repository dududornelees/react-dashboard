// Styles
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/Themes";

const App = () => {
  return <ThemeProvider theme={DefaultTheme}>App!</ThemeProvider>;
};

export default App;
