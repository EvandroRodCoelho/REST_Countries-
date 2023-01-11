import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initalValue } from '../../mock/initialValueSingleCountry';
import { ISingleCountry } from '../../types/singleCountryType';

export function useCountry() {


  const [country, setCountry] = useState<ISingleCountry>(initalValue);
  const [isError, setIsError] = useState(false);
  const { name } = useParams<string>();

  async function Get() {
    try {
      const res = await axios.get(`https://restcountries.com/v2/alpha/${name}`);
      setCountry(res.data);
    }
    catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    Get();
  }, [name]);

  return {
    country,
    isError
  };
}
