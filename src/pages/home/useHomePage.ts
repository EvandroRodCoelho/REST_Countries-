import axios from 'axios';
import { useState, useEffect, useLayoutEffect, ChangeEvent, useCallback, useRef } from 'react';

import { ICountries } from '../../types/apiType';

export function usePageHome() {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [firstFetch, setFirstFetch] = useState<ICountries[]>([]);
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState<string>();
  const [isError, setIsError] = useState(false);

  let first = true;
  const value = valueSelect;
  async function Get() {
    try {
      const res = await axios.get('https://restcountries.com/v2/all');
      setCountries(res.data);
      setFirstFetch(res.data);
    } catch (e) {
      setIsError(true);
    }

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

  function selectForInput() {
    !valueSelect ? setCountries(filterWithName(firstFetch)) :
      setCountries(filterWithRegionAndName());
  }
  function selectCountries() {
    if (valueSelect == '') {
      !valueInput ? setCountries(firstFetch) : filterWithName(firstFetch);
      return;
    }
    valueInput ? setCountries(filterWithRegionAndName()) :setCountries(filterWithRegion(firstFetch));
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
  };
}
