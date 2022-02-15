import { useLocation } from "react-router-dom";

// Styles
import { HeaderStyle } from "./styles";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <HeaderStyle>
      <div className="header__current-page">{pathname}</div>

      <div className="header__profile">Profile</div>
    </HeaderStyle>
  );
};

export default Header;
