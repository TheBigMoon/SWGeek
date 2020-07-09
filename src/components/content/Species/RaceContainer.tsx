import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { getRace } from '../../../redux/actions/actions';
import { Race } from '../../../types/entities/entities';
import RaceItem from './RaceItem';

interface StateToProps {
  race: Race | null
}

interface DispatchToProps {
  getRace: (raceId: number) => void
}

const RaceContainer: React.FC<StateToProps & DispatchToProps> = ({ race, getRace }) => {
  const { raceId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRace(raceId));
  }, [dispatch, getRace, raceId]);
  return (
    <div>
      <RaceItem race={race} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  race: state.speciesPage.race
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getRace
  }
)(RaceContainer);
