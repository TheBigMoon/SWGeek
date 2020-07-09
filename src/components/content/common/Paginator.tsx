import React from 'react';
import { useDispatch } from 'react-redux';

interface PaginatorProps {
  prevPage: string | null,
  nextPage: string | null,
  getContent: (page: string) => void
}
const Paginator: React.FC<PaginatorProps> = ({ prevPage, nextPage, getContent }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <div>
      {
        prevPage
          ? (
            <button onClick={() => dispatch(getContent(prevPage?.replace('http://swapi.dev/api/people/', '')))}>
              prevPage
            </button>
          ) : null
      }
      {
        nextPage
          ? (
            <button onClick={() => dispatch(getContent(nextPage?.replace('http://swapi.dev/api/people/', '')))}>
              nextPage
            </button>
          ) : null
      }
    </div>
  );
};

export default Paginator;
