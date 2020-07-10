import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Starship } from '../../../types/entities/entities';
import { getStarships } from '../../../redux/actions/actions';
import StarshipItem from './StarshipItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships(''));
  }, [dispatch, getStarships]);
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
      {allStarships}
      <Paginator prevPage={prevPage} nextPage={nextPage} getContent={getStarships} />
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
