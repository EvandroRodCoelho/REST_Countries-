import { ReactNode } from 'react';
import { Container } from './styles';

interface Imain{
  children: ReactNode;
}
export function Main({children}:Imain) {
  return (
    <Container>
      {children}

    </Container>
  );

}
