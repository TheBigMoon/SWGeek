import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Race } from '../../../types/entities/entities';
import { getSpecies } from '../../../redux/actions/actions';
import RaceItem from './RaceItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecies(''));
  }, [dispatch, getSpecies]);
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
