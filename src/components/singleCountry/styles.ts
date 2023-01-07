import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    img{
      max-width: 70%;
    }
  @media (min-width: 500px) {
      display: flex;
      flex-direction:row;
    img{
      max-width: 90%;
    }
    div{
      flex: 1;
    }
  }

  @media (min-width: 1120px) {
    gap:38px;
  }

`;
export const TextContainer = styled.div`

  h2{
    font-size: ${Font.size.lg};
    font-weight: ${Font.weight.ExtraBold};
  }
  p{
    span{
      opacity: 0.9;
    }
  }
  @media (min-width: 1024px) {

    .information{
      display: flex;
      .right{
        margin-top: 10px;
      }
    }
    .borders{
      display: flex;
      h3{
        margin: 0;
        margin-top: 20px;
        margin-right: 10px;
      }
    }
  }
`;
