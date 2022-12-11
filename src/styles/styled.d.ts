import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,

    colors: {
      backgroundBody: string,
      background: string,
      text: {
        primary: string,
        secondary: string,
        third: string,
        default: string,
      },
      isHover: string,
      isActive: string,
      link: string,
    }
  }
}