import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { GlobalStyle } from "styles/Global";
import Layout from "components/Layout/Layout";

// Pages
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />

        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />

          {/* Auth routes */}
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
