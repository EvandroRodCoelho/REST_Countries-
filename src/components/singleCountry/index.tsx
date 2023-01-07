import { ISingleCountry } from '../../types/singleCountryType';
import { Borders } from '../borders';
import { Card, TextContainer } from './styles';

export function SingleCountry({ flag, capital,
  topLevelDomain, subregion, region, population,
  nativeName,  name, languages, currencies,borders }: ISingleCountry) {
  return (

    <Card>
      <div className="image">
        <img src={flag} alt="" />
      </div>
      <TextContainer >
        <div className='information'>
          <div className="left">
            <h2>{name }</h2>
            <p>Native Name: <span>{nativeName }</span></p>
            <p>Population: <span>{population }</span></p>
            <p>Region: <span>{region }</span></p>
            <p>Sub Region: <span>{subregion }</span></p>
            <p>Capital: <span>{capital}</span></p>
          </div>

          <div className='right'>
            <p>Top-Level Domain: <span>{topLevelDomain}</span></p>
            <p>
              Languages:
              {languages && languages.map((langua,value) => (
                value == 0 ?
                  <span key={value}>
                    {` ${langua.name}`}
                  </span> : <span key={value}>{`, ${langua.name}`} </span>
              ))}
            </p>
            <p>
              Currencies:
              {currencies && currencies.map((langua,value) => (
                value == 0 ? <span key={value}>{` ${langua.name}`}</span>
                  : <span key={value}>{`, ${langua.name}`} </span>
              ))}
            </p>
          </div>
        </div>
        <div className='borders'>
          <h3>Countries Border:</h3>
          <Borders borders={borders}/>
        </div>
      </TextContainer>
    </Card>
  );
}
