import React from 'react';
import { useDispatch } from 'react-redux';

interface PaginatorProps {
  prevPage: string | null,
  nextPage: string | null,
  getContent: (page: string) => void
}
const Paginator: React.FC<PaginatorProps> = ({ prevPage, nextPage, getContent }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {
        prevPage
          ? (
            <button onClick={() => dispatch(getContent(prevPage?.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')))}>
              prevPage
            </button>
          ) : null
      }
      {
        nextPage
          ? (
            <button onClick={() => dispatch(getContent(nextPage?.replace(/http:\/\/swapi\.dev\/api\/.+\//g, '')))}>
              nextPage
            </button>
          ) : null
      }
    </div>
  );
};

export default Paginator;
