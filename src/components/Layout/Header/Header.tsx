import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Styles
import { HeaderStyle } from "./styles";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [pageName, setPageName] = useState("");

  const handlePageName = () => {
    switch (pathname) {
      case "/home":
        setPageName("Home");
        break;
      case "/clients":
        setPageName("Clientes");
        break;
      case "/schedules":
        setPageName("Agendamentos");
        break;
      case "/profile":
        setPageName("Meu perfil");
        break;
      default:
        setPageName("Página indefinida");
        break;
    }
  };

  useEffect(() => {
    handlePageName();
  }, [pathname]);

  return (
    <HeaderStyle>
      <div className="header__current-page">
        <h2>{pageName}</h2>
      </div>

      <div className="header__profile">
        <div className="profile__name">
          <p>Olá, Eduardo!</p>
        </div>

        <div className="profile__image">
          <img src="users/eduardo.jpg" alt="Usuário - Eduardo" />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
