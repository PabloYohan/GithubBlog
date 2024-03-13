import { createGlobalStyle } from 'styled-components'
import '../fonts/Nunito-Regular.ttf'
import '../fonts/Nunito-Bold.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Nunito";
    src: url('../fonts/Nunito-Regular.ttf');
  }

  @font-face {
    font-family: "Nunito";
    src: url('../fonts/Nunito-Bold.ttf');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito";
    background-color: ${(props) => props.theme['base-background']};
  }
`
