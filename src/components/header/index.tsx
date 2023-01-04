import { useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../provider/theme';

import { Button, Container } from './styles';

export function Header() {
  const { toggleTheme,theme } = useContext(ThemeContext);
  return (
    <Container>
      <h2>Where in the world?</h2>
      <Button onClick={toggleTheme}>
        {theme.name == 'dark' ? <BsMoon /> : <BsSun />}
        {theme.name}
      </Button>

    </Container>
  );
}
