import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICountries } from '../../types/apiType';

export function Country() {

  const [country, setCountry] = useState<ICountries[]>();

  const { capital } = useParams<string>();
  async function Get() {
    const res = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`);
    setCountry(res.data);
  }
  useEffect(() => {
    Get();
  }, []);
  return (
    <Link to='/' >Voltar</Link>

  );
}
