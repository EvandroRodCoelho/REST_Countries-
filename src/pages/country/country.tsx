import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { Borders } from '../../components/borders';
import { Main } from '../../components/main';
import { SingleCountry } from '../../components/singleCountry';
import { ISingleCountry } from '../../types/singleCountryType';
import { initalValue } from '../../utils/initialValueSingleCountry';
import { NotFoundPage } from '../notFoundPage';
import { Container } from './styles';

export function Country() {

  const [country, setCountry] = useState<ISingleCountry>(initalValue);
  const [isError, setIsError] = useState(false);
  const { name } = useParams<string>();

  async function Get() {
    try {
      const res = await axios.get(`https://restcountries.com/v2/alpha/${name}` );
      setCountry(res.data);
    }
    catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    Get();
  }, [name]);

  function CountryComponent() {
    return (
      <Main>
        <Container>
          <Link to='/' className='back' >
            <AiOutlineArrowLeft />
            Voltar
          </Link>
          <div>

            <SingleCountry
              capital={country.capital}
              population={country.population}
              nativeName={country.nativeName}
              subregion={country.subregion}
              region={country.region}
              flag={country.flag}
              name={country.name}
              languages={country.languages}
              topLevelDomain={country.topLevelDomain}
              currencies={country.currencies}
              alpha2Code={country.alpha2Code}
              borders={country.borders}
            />
          </div>
        </Container>

      </Main>
    );
  }


  return (
    <>
      {isError ? <NotFoundPage />
        : <CountryComponent  />}
    </>

  );
}
