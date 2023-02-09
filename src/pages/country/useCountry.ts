import axios from 'axios';
import {  useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { ISingleCountry } from '../../types/singleCountryType';

export function useCountry() {

  const { data,isError, isFetching } = useQuery<ISingleCountry >(['country'], ()=> Get());
  const { name } = useParams<string>();
  const client = useQueryClient();
  const mutate = useMutation<ISingleCountry>(() => Get(), {
    onSuccess: () => {
      client.invalidateQueries(['country']);
    },
  });
  async function Get() {
    try {
      const res = await axios.get(`https://restcountries.com/v2/alpha/${name}`);
      return res.data;
    }
    catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    mutate.mutate();
  }, [name]);

  return {
    data,
    isError,
    mutate,
    isFetching
  };
}
