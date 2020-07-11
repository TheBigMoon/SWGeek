import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Race } from '../../../types/entities/entities';
import RaceItem from './RaceItem';
import { getRace } from '../../../redux/actions/speciesActions';

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
      <RaceItem showLink={false} showInfoBlocks race={race} />
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
