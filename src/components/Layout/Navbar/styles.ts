import styled from "styled-components";

export const NavbarStyle = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 255px;
  min-height: 100vh;
  height: 100%;
  position: fixed;

  .navbar__logo {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      margin-right: 12px;
    }

    h2 {
      font-size: 19px;
      font-weight: bold;
      color: #a4a6b3;
    }
  }

  .navbar__menu ul {
    li {
      list-style: none;
      height: 100%;
      width: 100%;

      a {
        transition: ${(props) => props.theme.transition};
        padding: 20px 32px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a4a6b3;
        position: relative;

        .active-dash {
          height: 100%;
          width: 3px;
          display: none;
          position: absolute;
          left: 0;
          background-color: #dde2ff;
        }

        svg {
          margin-right: 22px;
          font-size: 16px;
        }

        &:hover {
          background-color: #3f4049;
        }

        &.active {
          background-color: #3f4049;
          color: #dde2ff;

          .active-dash {
            display: block;
          }
        }
      }
    }
  }
`;
