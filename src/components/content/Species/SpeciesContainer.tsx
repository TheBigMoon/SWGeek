import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Race } from '../../../types/entities/entities';
import { getSpecies } from '../../../redux/actions/actions';
import RaceItem from './RaceItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';
import SearchField from "../common/SearchField";

interface StateToProps {
  species: Array<Race> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getSpecies: (page: string) => void
}

const SpeciesContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    species, prevPage, nextPage, getSpecies
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecies(search));
  }, [dispatch, getSpecies, search]);
  const allSpecies = species?.map((race) => (
    <RaceItem
      race={race}
      showInfoBlocks={false}
      showLink
    />
  ));
  return (
    <div>
      <PageTitle>
        Species
      </PageTitle>
      <SearchField getContent={getSpecies} />
      <Paginator prevPage={prevPage} nextPage={nextPage} />
      {allSpecies}
      <Paginator prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  species: state.speciesPage.species,
  prevPage: state.speciesPage.prevPage,
  nextPage: state.speciesPage.nextPage
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getSpecies
  }
)(SpeciesContainer);
