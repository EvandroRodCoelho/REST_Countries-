import { Main } from '../../components/main';
import { Container, Grid, Input, Select } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { ChangeEvent,useEffect, useState } from 'react';
import axios from 'axios';
import { ICountries } from '../../types/apiType';
import { CardCountry } from '../../components/cardCountry';


export function Home() {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [firstFetch, setFirstFetch] = useState<ICountries[]>([]);

  async function Get() {
    const res = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(res.data);
    setFirstFetch(res.data);
  }
  useEffect(() => {
    Get();
  }, []);

  type NewType = HTMLSelectElement;

  async function handleSelect(e: ChangeEvent<NewType>) {
    console.log(firstFetch);
    const filtrado = firstFetch.filter(first => first.region == e.target.value);
    console.log(filtrado);
    setCountries(filtrado);

  }

  return (
    <Main>
      <Container >
        <AiOutlineSearch  />
        <Input type="text" placeholder='Search for a country...'/>
      </Container>
      <Select name="" id="" onChange={(e) => handleSelect(e)}>
        <option value="" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>


      <Grid>
        {countries.map((country, value) => (
          <CardCountry
            capital={country.capital}
            name={country.name.common}
            region={country.region}
            population={country.population}
            flag={country.flags.png}
            key={value}
          />
        ))}
      </Grid>
    </Main>
  );
}
