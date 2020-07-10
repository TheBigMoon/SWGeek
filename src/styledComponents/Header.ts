import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #66bb6a;
  padding: 15px 0 15px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  
  & a {
    margin-right: 30px;
    font-weight: 600;
    font-size: 22px;
  }
`;

export default StyledHeader;
