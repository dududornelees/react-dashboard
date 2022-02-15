import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { GlobalStyle } from "styles/Global";

// Pages
import Login from "pages/Login/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <AuthContextProvider>
        <Switch>
          <Route path="/login" element={<Login />} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
