import React from 'react';
import { PageButton, StyledPaginator } from '../../../styledComponents/common/StyledPaginator';

interface PaginatorProps {
  prevPage: string | null,
  nextPage: string | null,
}
const Paginator: React.FC<PaginatorProps> = ({ prevPage, nextPage }) => {
  return (
    <StyledPaginator>
      {
        prevPage
          ? (
            <PageButton to={prevPage.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')}>
              prevPage
            </PageButton>
          )
          : null
      }
      {
        nextPage
          ? (
            <PageButton to={nextPage.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')}>
              nextPage
            </PageButton>
          )
          : null
      }
    </StyledPaginator>
  );
};

export default Paginator;
