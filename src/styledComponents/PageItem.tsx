import styled from 'styled-components';

export const PageItem = styled.div`
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  & a {
    color: #338a3e;
  }
`;

export const ItemTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const ItemH2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoProp = styled.div`
  margin-left: 10px;
`;
