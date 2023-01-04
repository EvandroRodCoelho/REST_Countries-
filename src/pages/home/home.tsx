import { Main } from '../../components/main';
import { Container, Input, Select } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
export function Home(){
  return (
    <Main>
      <Container >
        <AiOutlineSearch  />
        <Input type="text" placeholder='Search for a country...'/>
      </Container>
      <Select name="" id="">
        <option value="" hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Main>
  );
}
