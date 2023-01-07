import { Main } from '../../components/main';
import { Container, Grid, Input, Select } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { ChangeEvent,useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { ICountries } from '../../types/apiType';
import { CardCountry } from '../../components/cardCountry';import { useHref } from 'react-router-dom';




export function Home() {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [firstFetch, setFirstFetch] = useState<ICountries[]>([]);
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState<string>();
  let first = true;
  const value = valueSelect;
  async function Get() {
    const res = await axios.get('https://restcountries.com/v2/all');
    setCountries(res.data);
    setFirstFetch(res.data);
  }
  useEffect(() => {
    Get();
  }, []);
  useEffect(() => {
    if (first) {
      selectCountries();
    }
  }, [valueSelect]);
  useEffect(() => {
    if (first) {
      selectForInput();
    }
  }, [valueInput]);
  useLayoutEffect(() => {
    if (first) {
      first = false;
    }
  }, []);
  function filterWithName(countries:ICountries[]) {
    return countries.filter(country => country.name.includes(valueInput));
  }
  function filterWithRegion(countries: ICountries[]) {
    return countries.filter(country => country.region == valueSelect);
  }
  function filterWithRegionAndName() {
    const filterName = firstFetch.filter(country => country.name.includes(valueInput));
    const filterRegion = filterName.filter(country => country.region == valueSelect);
    return filterRegion;
  }
  function handleInput(e:ChangeEvent<HTMLInputElement>) {
    setValueInput(e.target.value);
  }
  function selectForInput() {
    !valueSelect ? setCountries(filterWithName(firstFetch)) :
      setCountries(filterWithRegionAndName());
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setValueSelect(e.target.value);
  }
  function selectCountries() {
    if (valueSelect == '') {
      !valueInput ? setCountries(firstFetch) : filterWithName(firstFetch);
      return;
    }
    valueInput ? setCountries(filterWithRegionAndName()) :setCountries(filterWithRegion(firstFetch));
  }

  return (
    <Main>
      <Container >
        <AiOutlineSearch  />
        <Input type="text" placeholder='Search for a country...'
          onChange={(e)=> handleInput(e)}/>
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
        {countries.map((country, value) => (
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
    </Main>
  );
}
