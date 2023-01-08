import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function NotFoundPage() {

  return (
    <Container>
      <p>oops! Page not Found</p>
      <h1>404</h1>
      <p>We are sorry, But the page you requested was not found</p>
      <Link to='/' className='back' >
        <AiOutlineArrowLeft />
          Home
      </Link>
    </Container>
  );
}
