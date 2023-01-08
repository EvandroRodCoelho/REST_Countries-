import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
  flex-direction: column;
  h1{
    font-size: ${Font.size.lg};
  }
  a{
      margin-top: 20px;
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
      display: flex;
      align-items: center;
      gap: 10px;

  }
`;
