import { GlobalStyles } from './styles/global';
import { Header } from './components/header';
import { CustomThemeProvider } from './provider/theme';




export function App() {



  return (
    <CustomThemeProvider >
      <GlobalStyles  />
      <Header  />

    </CustomThemeProvider>
  );
}
