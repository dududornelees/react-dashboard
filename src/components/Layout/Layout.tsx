import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

// Styles
import { LayoutStyle } from "./styles";

const Layout: React.FC = () => {
  return (
    <LayoutStyle>
      <Navbar />

      <div className="layout__content">
        <Header />
        <Outlet />
      </div>
    </LayoutStyle>
  );
};

export default Layout;
