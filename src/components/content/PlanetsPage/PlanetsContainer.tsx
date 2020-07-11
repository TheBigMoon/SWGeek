import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Planet } from '../../../types/entities/entities';
import { getPlanets } from '../../../redux/actions/actions';
import PlanetItem from './PlanetItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';
import SearchField from "../common/SearchField";

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
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets(search));
  }, [dispatch, getPlanets, search]);
  const allPlanets = planets?.map((planet) => (
    <PlanetItem
      planet={planet}
      showLink
      showInfoBlocks={false}
    />
  ));
  return (
    <div>
      <PageTitle>
        Planets
      </PageTitle>
      <Paginator prevPage={prevPage} nextPage={nextPage} />
      <SearchField getContent={getPlanets} />
      {allPlanets}
      <Paginator prevPage={prevPage} nextPage={nextPage} />
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
