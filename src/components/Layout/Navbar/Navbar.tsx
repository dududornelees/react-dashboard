import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

// Styles
import { NavbarStyle } from "./styles";

// Icons
import { AiFillHome } from "react-icons/ai";
import { FaUsers, FaUserAlt } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { Logout } = useAuthContext();

  return (
    <NavbarStyle>
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo da Empresa" />
        <h2>Nome e Logo</h2>
      </div>

      <div className="navbar__menu">
        <ul>
          <li>
            <Link className={pathname == "/home" ? "active" : ""} to="/home">
              <span className="active-dash"></span>
              <AiFillHome />
              Home
            </Link>
          </li>

          <li>
            <Link
              className={pathname == "/clients" ? "active" : ""}
              to="/clients"
            >
              <span className="active-dash"></span>
              <FaUsers />
              Clientes
            </Link>
          </li>

          <li>
            <Link
              className={pathname == "/schedules" ? "active" : ""}
              to="/schedules"
            >
              <span className="active-dash"></span>
              <AiFillSchedule />
              Agendamentos
            </Link>
          </li>

          <li>
            <Link
              className={pathname == "/profile" ? "active" : ""}
              to="/profile"
            >
              <span className="active-dash"></span>
              <FaUserAlt />
              Meu perfil
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => {
                Logout();
              }}
            >
              <FiLogOut />
              Sair
            </button>
          </li>
        </ul>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
