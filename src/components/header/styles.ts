import styled from 'styled-components';
import { Font } from '../../styles/font';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.primary};
  height: 70px;
  padding: 14px 25px;
  font-size: ${Font.size.sm};
  box-shadow: 0px 4px 36px -14px ${props => props.theme.secondary};
`;

export const Button = styled.button`
  display: flex;
  gap:8px;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.text};
  font-weight: ${Font.weight.SemiBold};
  @media (min-width: 1100px) {
    cursor: pointer;
  }
`;
