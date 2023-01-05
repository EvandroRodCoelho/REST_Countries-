import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color:${props => props.theme.name == 'dark' ? props.theme.text : props.theme.primary};
  border: 1px solid ${props => props.theme.primary};
  padding: 8px;
  border-radius: 8px;
  background-color:${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
  box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};

  svg{
    margin-left: 20px;
  }

`;
export const Input = styled.input`
    flex: 1;
    border: 0;
    background: transparent;
    color:${props => props.theme.text};
    &:focus{
      outline: 0;
    }
    &::placeholder{
      color:${props => props.theme.text};
    }
`;
export const Select = styled.select`

  color:${props => props.theme.text};
  box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};
  outline: 0;
  background-color:${props => props.theme.name == 'dark' ? props.theme.primary : props.theme.background};
  padding: 12px 16px;
  cursor: pointer;
  font-weight: ${Font.weight.SemiBold};
  border-radius: 8px;
  margin: 24px 0;
  option{
    cursor: pointer;
    margin-top: 10px;
    font-weight: ${Font.weight.SemiBold};
  }

`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 100%;
`;
