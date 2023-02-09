import { GlobalStyles } from './styles/global';
import { CustomThemeProvider } from './provider/theme';
import { Router } from './router';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/querry';




export function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider >
        <GlobalStyles  />
        <Router  />

      </CustomThemeProvider>
    </QueryClientProvider>
  );
}
