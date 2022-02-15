import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Types
type ContextValue = {
  Login: (email: string, password: string) => void;
};

const DefaultValues = {
  Login: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const Login = (email: string, password: string) => {
    console.log(`Login: ${email} e ${password}`);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ Login }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
