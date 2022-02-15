import { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";

// Styles
import { LoginStyle } from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginStyle>
      <Paper elevation={4} className="login__container">
        <div className="login__logo">
          <img src="/logo.png" alt="Logo da Empresa" />
        </div>

        <div className="login__text">
          <div className="login__title">
            <h2>Nome da Empresa</h2>
          </div>

          <div className="login__description">
            <p>Insira seu email e senha abaixo</p>
          </div>
        </div>

        <div className="login__form">
          <form>
            <TextField
              className="login__form__input"
              type="text"
              label="Insira seu email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />

            <TextField
              className="login__form__input"
              type="password"
              label="Insira sua senha"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />

            <Button variant="contained" type="button" fullWidth>
              Entrar
            </Button>
          </form>
        </div>
      </Paper>
    </LoginStyle>
  );
};

export default Login;
