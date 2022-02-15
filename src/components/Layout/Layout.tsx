import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

// Styles
import { LayoutStyle } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutStyle>
      <Navbar />

      <div className="layout__content">
        <Header />
        {children}
      </div>
    </LayoutStyle>
  );
};

export default Layout;
