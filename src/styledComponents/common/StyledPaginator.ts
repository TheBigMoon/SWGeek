import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledPaginator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const PageButton = styled(NavLink)`
  margin: 0 15px;
  background-color: #66bb6a;
  border: none;
  padding: 7px 25px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  
  &:active {
    background-color: #aed581;
  } 
`;
