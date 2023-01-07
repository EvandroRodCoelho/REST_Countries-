import styled from 'styled-components';


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 50%;
  margin-top: 20px;
  width: 100%;
  gap: 14px;
  @media (min-width: 1110px) {
    grid-template-columns: repeat( 4, minmax(100px, 1fr));
    margin-left: 20px;
  }
`;
