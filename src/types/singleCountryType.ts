export interface ISingleCountry {
  name: string,
  nativeName: string,
  population: number,
  region: string,
  subregion: string,
  capital: string,
  topLevelDomain: string,
  languages: [{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }],
  flag: string,
  borders: string[];
  alpha2Code: string;
  currencies: [{
    code: string;
    name: string;
    symbol: string;
  }]
}
