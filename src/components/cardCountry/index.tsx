import { Container, ContainerImg, ContainerText } from './styles';

interface ICountries {
  name: string
  region: string;
  population: string;
  capital: string[];
  flag: string;
}


export function CardCountry({name , region ,population,capital,flag}:ICountries) {

  return (
    <Container>
      <ContainerImg>
        <img src={flag} alt={flag} />

      </ContainerImg>
      <ContainerText>
        <h2>{name}</h2>
        <h3>Population: <span> {population} </span> </h3>
        <h3>Region: <span> {region} </span> </h3>
        <h3>Capital: <span>{capital}</span>  </h3>
      </ContainerText>
    </Container>
  );
}
