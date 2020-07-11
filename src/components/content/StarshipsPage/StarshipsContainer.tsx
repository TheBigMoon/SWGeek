import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Starship } from '../../../types/entities/entities';
import { getStarships } from '../../../redux/actions/actions';
import StarshipItem from './StarshipItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';
import SearchField from "../common/SearchField";

interface StateToProps {
  starships: Array<Starship> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getStarships: (page: string) => void
}

const StarshipsContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    starships, prevPage, nextPage, getStarships
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships(search));
  }, [dispatch, getStarships, search]);
  const allStarships = starships?.map((starship) => (
    <StarshipItem
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
      <SearchField getContent={getStarships} />
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
    getStarships
  }
)(StarshipsContainer);
