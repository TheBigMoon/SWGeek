import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Planet } from '../../../types/entities/entities';
import PlanetItem from './PlanetItem';
import { getPlanet } from '../../../redux/actions/planetsActions';

interface StateToProps {
  planet: Planet | null
}

interface DispatchToProps {
  getPlanet: (starshipId: number) => void
}

const PlanetContainer: React.FC<StateToProps & DispatchToProps> = ({ planet, getPlanet }) => {
  const { planetId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanet(planetId));
  }, [dispatch, getPlanet, planetId]);
  return (
    <div>
      <PlanetItem showLink={false} showInfoBlocks planet={planet} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  planet: state.planetsPage.planet
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPlanet
  }
)(PlanetContainer);
