import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
  margin: auto;
  max-width: 450px;
  min-width: 360px;
}
html {
font-size: 62.5%;
}
`;

export default GlobalStyle;
