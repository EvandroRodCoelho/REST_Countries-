import { Link } from 'react-router-dom';
import { Grid } from './styles';


interface IBorder{
  borders: [
    string
  ];
}
export function Borders({borders}:IBorder) {

  return (
    <Grid>
      {borders.map((country, value) => (
        <Link key={value}
          to={`/country/${country}`}>{country} </Link>
      ))}
    </Grid>
  );
}
