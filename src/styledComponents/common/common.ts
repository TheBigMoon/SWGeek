import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'item-active';

export const LinkItem = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  
  &.${activeClassName} {
   color: #e1ffb1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 10% 0 10%;
`;

export const PageTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

interface FlexBoxProps {
  column: boolean,
  center: boolean
}

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props: FlexBoxProps) => (props.column ? 'column' : 'row')};
  justify-content: center;
  align-items: ${(props: FlexBoxProps) => (props.center ? 'center' : 'normal')};
`;
