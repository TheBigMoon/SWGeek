import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Starship } from '../../../types/entities/entities';
import { getStarship } from '../../../redux/actions/actions';
import StarshipItem from './StarshipItem';

interface StateToProps {
  starship: Starship | null
}

interface DispatchToProps {
  getStarship: (starshipId: number) => void
}

const StarshipContainer: React.FC<StateToProps & DispatchToProps> = ({ starship, getStarship }) => {
  const { starshipId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarship(starshipId));
  }, [dispatch, getStarship, starshipId]);
  return (
    <div>
      <StarshipItem starship={starship} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  starship: state.starshipsPage.starship
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getStarship
  }
)(StarshipContainer);
