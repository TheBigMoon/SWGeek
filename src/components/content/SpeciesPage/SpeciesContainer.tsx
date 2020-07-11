import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Race } from '../../../types/entities/entities';
import { getSpecies, sortSpeciesByAZ, sortSpeciesByZA } from '../../../redux/actions/actions';
import RaceItem from './RaceItem';
import Paginator from '../common/Paginator';
import { FlexBox, PageTitle } from '../../../styledComponents/common/common';
import SearchField from '../common/SearchField';
import Sorter from '../common/Sorter';

interface StateToProps {
  species: Array<Race> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getSpecies: (page: string) => void,
  sortSpeciesByAZ: (sortByAZ: boolean) => void,
  sortSpeciesByZA: (sortByZA: boolean) => void
}

const SpeciesContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    species, prevPage, nextPage, getSpecies, sortSpeciesByAZ, sortSpeciesByZA
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecies(search));
  }, [dispatch, getSpecies, search]);
  const allSpecies = species?.map((race) => (
    <RaceItem
      key={race.name}
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
      <FlexBox column={false} center>
        <SearchField getContent={getSpecies} />
        <Sorter sortByAZ={sortSpeciesByAZ} sortByZA={sortSpeciesByZA} />
      </FlexBox>
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
    getSpecies,
    sortSpeciesByAZ,
    sortSpeciesByZA
  }
)(SpeciesContainer);
