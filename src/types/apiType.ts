
export interface ICountries {
  name: {
    common: string,
    official: string;
  }
  region: string;
  population: string;
  capital: string[];
  flags: {
    svg: string;
    png: string;
  }
}
