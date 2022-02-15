import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "styles/Global";

// Pages
import Login from "pages/Login/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
