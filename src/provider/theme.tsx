import  { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../styles/theme/light';
import { dark } from '../styles/theme/dark';

interface ThemeContextData {
  toggleTheme(): void;
  theme: ITheme;
}
export interface ITheme {
  name: string;
  primary: string;
  background: string;
  text: string;
  secondary: string;
}
interface IProvider {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function useTheme() {
  useContext(ThemeContext);
}

export function CustomThemeProvider  ({ children }:IProvider) {
  const [theme, setTheme] = useState<ITheme>(light);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'dark') {
      setTheme(light);
    }
    else if (theme.name === 'light') {
      setTheme(dark);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
