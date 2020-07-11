import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Starship } from '../../../types/entities/entities';
import StarshipItem from './StarshipItem';
import Paginator from '../common/Paginator';
import { FlexBox, PageTitle } from '../../../styledComponents/common/common';
import SearchField from '../common/SearchField';
import Sorter from '../common/Sorter';
import { getStarships, sortStarshipsByAZ, sortStarshipsByZA } from '../../../redux/actions/starshipsActions';

interface StateToProps {
  starships: Array<Starship> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getStarships: (page: string) => void,
  sortStarshipsByAZ: (sortByAZ: boolean) => void,
  sortStarshipsByZA: (sortByZA: boolean) => void
}

const StarshipsContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    starships, prevPage, nextPage, getStarships, sortStarshipsByAZ, sortStarshipsByZA
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships(search));
  }, [dispatch, getStarships, search]);
  const allStarships = starships?.map((starship) => (
    <StarshipItem
      key={starship.name}
      starship={starship}
      showLink
      showInfoBlocks={false}
    />
  ));
  return (
    <div>
      <PageTitle>
        Starships
      </PageTitle>
      <FlexBox column={false} center>
        <SearchField getContent={getStarships} />
        <Sorter sortByAZ={sortStarshipsByAZ} sortByZA={sortStarshipsByZA} />
      </FlexBox>
      <Paginator prevPage={prevPage} nextPage={nextPage} />
      {allStarships}
      <Paginator prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  starships: state.starshipsPage.starships,
  prevPage: state.starshipsPage.prevPage,
  nextPage: state.starshipsPage.nextPage
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getStarships,
    sortStarshipsByAZ,
    sortStarshipsByZA
  }
)(StarshipsContainer);
