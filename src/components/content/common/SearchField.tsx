import React from 'react';
import { useDispatch } from 'react-redux';
import StyledSearchField from '../../../styledComponents/common/StyledSearchField';

interface SearchFieldProps {
  getContent: (search: string) => void
}

const SearchField: React.FC<SearchFieldProps> = ({ getContent }) => {
  const dispatch = useDispatch();
  const searchContent = (searchString: string) => {
    dispatch(getContent(searchString));
  };
  return (
    <StyledSearchField
      onChange={(e) => { searchContent(`?search=${e.target.value}`); }}
      placeholder="some text"
      type="text"
    />
  );
};

export default SearchField;
