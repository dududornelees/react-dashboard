import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0px 140px;

  .login__container {
    width: 380px;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 34px;

    .login__logo {
      margin-bottom: 10px;
    }

    .login__text {
      display: flex;
      flex-direction: column;
      align-items: center;

      .login__title h2 {
        font-weight: bold;
        font-size: 19px;
        color: #a4a6b3;
        margin-bottom: 6px;
      }

      .login__description p {
        font-size: 14px;
        color: #a4a6b3;
        margin-bottom: 24px;
      }
    }

    .login__form form {
      .login__form__input {
        margin-bottom: 12px;
      }
    }
  }
`;
