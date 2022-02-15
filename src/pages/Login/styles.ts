import styled from "styled-components";
import { shade } from "polished";

export const LoginStyle = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0px 140px;

  .login__container {
    border-radius: ${(props) => props.theme.borderRadius};
    width: 380px;
    height: auto;
    background-color: white;
    box-shadow: 3px 3px 5px #242424;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 38px 32px;

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
        margin-bottom: 8px;
      }

      .login__description p {
        font-size: 14px;
        color: #a4a6b3;
        margin-bottom: 26px;
      }
    }

    .login__form form {
      label {
        color: #9fa2b4;
        font-size: 12px;
        font-weight: bold;
        display: inline-block;
        margin-bottom: 6px;
      }

      input {
        border-radius: ${(props) => props.theme.borderRadius};
        width: 100%;
        padding: 11px 15px;
        border: 1px solid #d5d6db;
        margin-bottom: 18px;

        &::placeholder {
          color: #aeafb5;
        }

        &:focus {
          outline-color: ${(props) => props.theme.colors.primary};
          outline-style: solid;
          outline-width: 1px;
        }
      }

      button {
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: ${(props) => props.theme.borderRadius};
        transition: ${(props) => props.theme.transition};
        border: none;
        color: white;
        padding: 11px 15px;
        width: 100%;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) =>
            shade(0.3, props.theme.colors.primary)};
        }
      }
    }
  }
`;
