import { ISingleCountry } from '../types/singleCountryType';

export const initalValue:ISingleCountry = {
  name: '',
  nativeName: '',
  population: 0,
  region: '',
  subregion: '',
  capital: '',
  topLevelDomain: '',
  languages: [{
    iso639_1: '',
    iso639_2: '',
    name:   '',
    nativeName: '',
  }],
  flag: '',
  borders: [
    ''
  ],
  alpha2Code: '',
  currencies: [{
    code: '',
    symbol: '',
    name: '',
  }]
};
