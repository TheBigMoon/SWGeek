import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Planet } from '../../../types/entities/entities';
import { getPlanets } from '../../../redux/actions/actions';
import PlanetItem from './PlanetItem';
import Paginator from '../common/Paginator';

interface StateToProps {
  planets: Array<Planet> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getPlanets: (page: string) => void
}

const PlanetsContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    planets, prevPage, nextPage, getPlanets
  }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets(''));
  }, [dispatch, getPlanets]);
  const allPlanets = planets?.map((planet) => <PlanetItem planet={planet} />);
  return (
    <div>
      Planets
      <div>
        {allPlanets}
      </div>
      <Paginator prevPage={prevPage} nextPage={nextPage} getContent={getPlanets} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  planets: state.planetsPage.planets,
  prevPage: state.planetsPage.prevPage,
  nextPage: state.planetsPage.nextPage
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getPlanets
  }
)(PlanetsContainer);
