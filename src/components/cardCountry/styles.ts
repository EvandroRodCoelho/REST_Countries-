import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${props => props.theme.name == 'dark' ?props.theme.primary : props.theme.white};
  box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};
`;
export const ContainerImg = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  height:200px;
  img{
    width: 100%;
    height:100%;
    flex: 1;
    border-radius:10px 10px 0 0;
  }

`;

export const ContainerText = styled.div`

    flex:1;
    padding: 18px;
    h2{
        font-size: ${Font.size.mdl};
        font-weight: ${Font.weight.ExtraBold};
      }
    h3{
      font-size:${Font.size.md};
      font-weight: ${Font.weight.SemiBold};
      span{
        opacity: 0.8;
      }
    }


`;
