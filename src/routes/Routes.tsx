import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Pages
import Login from "../pages/Login/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
