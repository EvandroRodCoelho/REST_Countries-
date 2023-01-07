import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Container = styled.div`

  .back{
    display: flex;
    gap:8px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
    color:${props => props.theme.text};
    box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};
    outline: 0;
    background-color:${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
    padding: 12px 16px;
    cursor: pointer;
    font-weight: ${Font.weight.SemiBold};
    border-radius: 8px;
    margin: 24px 0;
    max-width: 150px;
    text-decoration: none;
  }


  .borders{
    width: 50%;
    margin-top: 10px;
    a{
      background-color: ${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
      color:${props => props.theme.text};
      box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};
      outline: 0;
      background-color:${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
      padding: 12px 16px;
      cursor: pointer;
      font-weight: ${Font.weight.SemiBold};
      border-radius: 8px;
      max-width: 150px;
      text-decoration: none;
    }
    margin-bottom: 20px;

    @media (min-width: 1110px) {
      h3{
        margin-left: 20px;
      }

    }
  }
`;

