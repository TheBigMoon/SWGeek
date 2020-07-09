import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Starship } from '../../../types/entities/entities';
import { getStarships } from '../../../redux/actions/actions';
import StarshipItem from './StarshipItem';

interface StateToProps {
  starships: Array<Starship> | null
}

interface DispatchToProps {
  getStarships: () => void
}

const StarshipsContainer: React.FC<StateToProps & DispatchToProps> = (
  { starships, getStarships }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships());
  }, [dispatch, getStarships]);
  const allStarships = starships?.map((starship) => <StarshipItem starship={starship} />);
  return (
    <div>
      Starships
      <div>
        {allStarships}
      </div>
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  starships: state.starshipsPage.starships
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getStarships
  }
)(StarshipsContainer);
