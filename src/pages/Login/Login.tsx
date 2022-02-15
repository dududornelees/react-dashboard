// Styles
import { LoginStyle } from "./styles";

const Login: React.FC = () => {
  return (
    <LoginStyle>
      <div className="login__container">
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
            <label htmlFor="email">EMAIL</label>
            <input name="email" type="text" placeholder="Endereço de email" />

            <label htmlFor="password">SENHA</label>
            <input type="password" placeholder="Senha" />

            <button type="button">Entrar</button>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
