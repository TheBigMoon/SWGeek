import React from 'react';
import { useDispatch } from 'react-redux';
import { FlexBox } from '../../../styledComponents/common/common';
import {SorterButton, StyledSorter} from "../../../styledComponents/common/StyledSorter";

interface SelectorProps {
  sortByAZ: (sortByAZ: boolean) => void
  sortByZA: (sortByZA: boolean) => void
}

const Sorter: React.FC<SelectorProps> = ({ sortByAZ, sortByZA }) => {
  const dispatch = useDispatch();
  return (
    <StyledSorter>
      <FlexBox column={false} center>
        <p>Sort by:</p>
        <SorterButton onClick={() => dispatch(sortByAZ(true))}>
          A-Z
        </SorterButton>
        <SorterButton onClick={() => dispatch(sortByZA(true))}>
          Z-A
        </SorterButton>
      </FlexBox>
    </StyledSorter>
  );
};

export default Sorter;
