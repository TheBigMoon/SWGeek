import React from 'react';
import { useDispatch } from 'react-redux';

interface SearchFieldProps {
  getContent: (search: string) => void
}

const SearchField: React.FC<SearchFieldProps> = ({ getContent }) => {
  const dispatch = useDispatch();
  const searchContent = (searchString: string) => {
    dispatch(getContent(searchString));
  };
  return (
    <div>
      <input
        onChange={(e) => { searchContent(`?search=${e.target.value}`); }}
        placeholder="some text"
        type="text"
      />
    </div>
  );
};

export default SearchField;
