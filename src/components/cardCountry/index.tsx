import { Link } from 'react-router-dom';
import { Container, ContainerImg, ContainerText } from './styles';

interface ICountries {
  name: string
  region: string;
  population: string;
  capital: string[];
  flag: string;
  alpha2Code: string;
}


export function CardCountry({ name, region, population, capital, flag,
  alpha2Code }: ICountries) {

  return (
    <Container>
      <ContainerImg>
        <img src={flag} alt={flag} loading="lazy" />
      </ContainerImg>
      <ContainerText>
        <Link to={`/country/${alpha2Code}`}>{name}</Link>
        <h3>Population: <span> {population} </span> </h3>
        <h3>Region: <span> {region} </span> </h3>
        <h3>Capital: <span>{capital}</span>  </h3>
      </ContainerText>
    </Container>
  );
}
