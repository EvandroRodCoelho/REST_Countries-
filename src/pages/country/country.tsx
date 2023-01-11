import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Main } from '../../components/main';
import { NotFoundPage } from '../notFoundPage';
import { SingleCountry } from '../../components/singleCountry';
import { useCountry } from './useCountry';

export function Country() {
  const { country,isError} = useCountry();

  function CountryComponent() {
    return (
      <>
        <Container>
          <Link to='/' className='back' >
            <AiOutlineArrowLeft />
            Voltar
          </Link>
          <div>

            <SingleCountry
              capital={country?.capital}
              population={country?.population}
              nativeName={country?.nativeName}
              subregion={country?.subregion}
              region={country?.region}
              flag={country?.flag}
              name={country?.name}
              languages={country?.languages}
              topLevelDomain={country?.topLevelDomain}
              currencies={country?.currencies}
              alpha2Code={country?.alpha2Code}
              borders={country?.borders}
            />
          </div>
        </Container>

      </>
    );
  }


  return (
    <>
      {isError ? <NotFoundPage />
        : <CountryComponent  />}
    </>

  );
}
