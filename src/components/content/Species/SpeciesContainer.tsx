import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Race } from '../../../types/entities/entities';
import { getSpecies } from '../../../redux/actions/actions';
import RaceItem from './RaceItem';

interface StateToProps {
  species: Array<Race> | null
}

interface DispatchToProps {
  getSpecies: () => void
}

const SpeciesContainer: React.FC<StateToProps & DispatchToProps> = (
  { species, getSpecies }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch, getSpecies]);
  const allSpecies = species?.map((race) => <RaceItem race={race} />);
  return (
    <div>
      Species
      <div>
        {allSpecies}
      </div>
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  species: state.speciesPage.species
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getSpecies
  }
)(SpeciesContainer);
