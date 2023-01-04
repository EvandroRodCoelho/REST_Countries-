import { GlobalStyles } from './styles/global';
import { CustomThemeProvider } from './provider/theme';
import { Router } from './router';




export function App() {



  return (
    <CustomThemeProvider >
      <GlobalStyles  />
      <Router  />

    </CustomThemeProvider>
  );
}
