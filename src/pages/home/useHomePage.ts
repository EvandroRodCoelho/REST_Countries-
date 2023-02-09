import axios from 'axios';
import { useState, useEffect, useLayoutEffect, ChangeEvent, useCallback, useRef } from 'react';
import { useQuery } from 'react-query';

import { ICountries } from '../../types/apiType';

export function usePageHome() {
  const { data,isError, isFetching } = useQuery<ICountries[]>(['data'], ()=> Get());
  const [countries, setCountries] = useState<ICountries[] | undefined>(data);
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState<string>();
  let first = true;
  const value = valueSelect;


  async function Get() {
    try {
      const res = await axios.get('https://restcountries.com/v2/all');
      setCountries(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }

  }
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

  function filterWithName(countries:ICountries[] | undefined) {
    return countries!.filter(country => country.name.includes(valueInput));
  }
  function filterWithRegion(countries: ICountries[] | undefined) {
    return countries!.filter(country => country.region == valueSelect);
  }
  function filterWithRegionAndName() {
    const filterName = data!.filter(country => country.name.includes(valueInput));
    const filterRegion = filterName!.filter(country => country.region == valueSelect);
    return filterRegion;
  }

  function selectForInput() {
    !valueSelect ? setCountries(filterWithName(data)) :
      setCountries(filterWithRegionAndName());
  }
  function selectCountries() {
    if (valueSelect == '') {
      !valueInput ? setCountries(data) : filterWithName(data);
      return;
    }
    valueInput ? setCountries(filterWithRegionAndName()) : setCountries(filterWithRegion(data));
  }

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  }, []);
  const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(e.target.value);
  }, []);

  return {
    handleInput,
    handleSelect,
    value,
    countries,
    isError,
    valueInput,
    data,
    first,
    isFetching
  };
}
