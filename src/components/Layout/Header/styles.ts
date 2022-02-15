import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__current-page h2 {
    color: ${(props) => props.theme.colors.text};
  }

  .header__profile {
    display: flex;
    align-items: center;
    cursor: pointer;

    .profile__text p {
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fontSize.small};
    }

    .profile__image {
      margin-left: 10px;

      img {
        border: 2px solid ${(props) => props.theme.colors.secondary};
        width: 44px;
        border-radius: 22px;
        padding: 2px;
      }
    }
  }
`;
