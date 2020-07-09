import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Planet } from '../../../types/entities/entities';
import { getPlanets } from '../../../redux/actions/actions';
import PlanetItem from './PlanetItem';

interface StateToProps {
  planets: Array<Planet> | null
}

interface DispatchToProps {
  getPlanets: () => void
}

const PlanetsContainer: React.FC<StateToProps & DispatchToProps> = (
  { planets, getPlanets }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch, getPlanets]);
  const allPlanets = planets?.map((planet) => <PlanetItem planet={planet} />);
  return (
    <div>
      Planets
      <div>
        {allPlanets}
      </div>
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  planets: state.planetsPage.planets
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPlanets
  }
)(PlanetsContainer);
