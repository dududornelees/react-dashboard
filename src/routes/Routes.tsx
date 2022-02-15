import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "providers/AuthContext";

// Styles
import { GlobalStyle } from "styles/Global";
import Layout from "components/Layout/Layout";

// Pages
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";
import Clients from "pages/Clients/Clients";
import Schedules from "pages/Schedules/Schedules";
import Profile from "pages/Profile/Profile";

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
            <Route path="clients" element={<Clients />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
