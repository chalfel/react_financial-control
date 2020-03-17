import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
  html, body {
    min-height: 100%;
  }
`;