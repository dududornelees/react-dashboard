import { createContext, useContext } from "react";

// Types
type ContextValue = {
  Login: (email: string, password: string) => void;
};

const DefaultValues = {
  Login: () => {},
};

export const AuthContext = createContext<ContextValue>(DefaultValues);

export const AuthContextProvider: React.FC = ({ children }) => {
  const Login = (email: string, password: string) => {
    console.log(`Login: Email: ${email} e Senha: ${password}`);
  };

  return (
    <AuthContext.Provider value={{ Login }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
