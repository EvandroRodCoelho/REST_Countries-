import { Routes } from 'react-router';
import { BrowserRouter,Route } from 'react-router-dom';
import { Header } from './components/header';
import { Country } from './pages/country/country';
import { NotFoundPage } from './pages/notFoundPage';
import { Home } from './pages/home/home';

export function Router() {


  return (
    <BrowserRouter>
      <Header   />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/country/:name' element={<Country />} />
        <Route  path='*' element={<NotFoundPage/>} />
      </Routes>

    </BrowserRouter>
  );

}
