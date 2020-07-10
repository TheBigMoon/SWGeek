import React from 'react';
import { useDispatch } from 'react-redux';
import { PageButton, StyledPaginator } from '../../../styledComponents/common/StyledPaginator';

interface PaginatorProps {
  prevPage: string | null,
  nextPage: string | null,
  getContent: (page: string) => void
}
const Paginator: React.FC<PaginatorProps> = ({ prevPage, nextPage, getContent }) => {
  const dispatch = useDispatch();
  const prev = prevPage || '';
  const next = nextPage || '';
  return (
    <StyledPaginator>
      <PageButton
        disabled={!prev}
        marginRight
        onClick={() => dispatch(getContent(prev.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')))}
      >
        prevPage
      </PageButton>
      <PageButton
        disabled={!next}
        marginRight={false}
        onClick={() => dispatch(getContent(next.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')))}
      >
        nextPage
      </PageButton>
    </StyledPaginator>
  );
};

export default Paginator;
