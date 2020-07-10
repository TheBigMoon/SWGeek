import styled from 'styled-components';

export const StyledPaginator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

interface PageButtonProps {
  marginRight: boolean
}

export const PageButton = styled.button`
  margin-right: ${(props: PageButtonProps) => (props.marginRight ? '25px' : '0')};
  background-color: #66bb6a;
  border: none;
  padding: 10px 25px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  
  &:active {
    background-color: #aed581;
  } 
`;
