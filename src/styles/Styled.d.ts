import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };

    fontSize: {
      small: string;
      medium: string;
      large: string;
    };

    transition: string;
    borderRadius: string;
  }
}
