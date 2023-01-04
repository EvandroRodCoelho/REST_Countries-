import 'styled-components';
import { ITheme } from '../provider/theme';
declare module 'styled-components' {


  export interface DefaultTheme extends ITheme{
    name: string;
    primary: string;
    background: string;
    text: string;
    secondary: string;
  }
}
