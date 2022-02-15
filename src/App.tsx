import Routes from "routes/Routes";

// Styles
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./styles/Themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
