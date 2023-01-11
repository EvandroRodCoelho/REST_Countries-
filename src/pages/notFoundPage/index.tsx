import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from './styles';
interface INotFoundPage {
  isHome: boolean;
}
export function NotFoundPage({isHome}:INotFoundPage) {

  return (
    <Container>
      <p>oops! Page not Found</p>
      <h1>404</h1>
      <p>We are sorry, But the page you requested was not found</p>

      {!isHome &&
        <Link to='/' className='back' >
          <AiOutlineArrowLeft />
            Home
        </Link>
      }
    </Container>
  );
}
