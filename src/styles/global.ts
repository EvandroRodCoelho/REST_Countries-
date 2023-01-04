import { createGlobalStyle } from 'styled-components';
import { Font } from './font';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: ${Font.size.md};
    font-family: ${Font.family};
  }
  body{
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
    color:${props => props.theme.text}
  }

`;
