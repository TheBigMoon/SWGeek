import React from 'react';
import { useDispatch } from 'react-redux';

interface SelectorProps {
  sortByAZ: (sortByAZ: boolean) => void
  sortByZA: (sortByZA: boolean) => void
}

const Sorter: React.FC<SelectorProps> = ({ sortByAZ, sortByZA }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(sortByAZ(true))}>A-Z</button>
      <button onClick={() => dispatch(sortByZA(true))}>A-Z</button>
    </>
  );
};

export default Sorter;
