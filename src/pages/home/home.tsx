import { Container, Grid, Input, Select } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { CardCountry } from '../../components/cardCountry';
import { usePageHome } from './useHomePage';
import { NotFoundPage } from '../notFoundPage';
import { Loading } from '../../components/loading';
export function Home() {
  const {first, handleInput,handleSelect,value,countries,isFetching,data ,isError,valueInput } = usePageHome();


  function Content() {

    if (isFetching) {
      return (
        <Loading   />
      );
    }

    return (
      <>
        <Container >
          <AiOutlineSearch  />
          <Input type="text" placeholder='Search for a country...'
            onChange={(e)=> handleInput(e)}
            value={valueInput}
            autoFocus
          />
        </Container>
        <Select name="" id="" value={value}
          onChange={(e) => handleSelect(e)}>
          <option value="" disabled >Filter by Region</option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>


        <Grid>
          {data &&  countries?.map((country, value) => (
            <CardCountry
              capital={country.capital}
              name={country.name}
              region={country.region}
              population={country.population}
              flag={country.flags.png}
              key={value}
              alpha2Code={country.alpha2Code}
            />
          ))}
        </Grid>
      </>
    );


  }


  return (
    <>
      {isError ? <NotFoundPage isHome={true}  /> :<Content /> }
    </>
  );
}
