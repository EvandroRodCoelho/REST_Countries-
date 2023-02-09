import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { NotFoundPage } from '../notFoundPage';
import { SingleCountry } from '../../components/singleCountry';
import { useCountry } from './useCountry';
import { Loading } from '../../components/loading';

export function Country() {
  const { data,isError, mutate ,isFetching} = useCountry();

  if (mutate.isLoading || isFetching) {
    return <Loading />;
  }


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
              capital={mutate.data?.capital}
              population={mutate.data?.population}
              nativeName={mutate.data?.nativeName}
              subregion={mutate.data?.subregion}
              region={mutate.data?.region}
              flag={mutate.data?.flag}
              name={mutate.data?.name}
              languages={mutate.data?.languages}
              topLevelDomain={mutate.data?.topLevelDomain}
              currencies={mutate.data?.currencies}
              alpha2Code={mutate.data?.alpha2Code}
              borders={mutate.data?.borders}
            />
          </div>
        </Container>

      </>
    );
  }


  return (
    <>
      {isError ? <NotFoundPage isHome={false } />
        : <CountryComponent  />}
    </>

  );
}
