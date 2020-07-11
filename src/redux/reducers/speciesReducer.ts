import { SpeciesStore } from '../../types/store/store';
import { SpeciesActionType } from '../../types/actions/speciesActionTypes';
import {
  SET_RACE, SET_SPECIES, SORT_SPECIES_BY_A_Z, SORT_SPECIES_BY_Z_A
} from '../../constants/actionTypeConstants';
import { sortHelper } from './reducerHelpers/sortHelper';

const initialState: SpeciesStore = {
  species: null,
  race: null,
  prevPage: null,
  nextPage: null,
  sortByAZ: false,
  sortByZA: false
};

const speciesReducer = (state = initialState, action: SpeciesActionType): SpeciesStore => {
  switch (action.type) {
    case SET_SPECIES: {
      const species = sortHelper(state.sortByAZ, state.sortByZA, action.species);
      return {
        ...state,
        species,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      };
    }
    case SET_RACE: {
      return {
        ...state,
        race: action.race
      };
    }
    case SORT_SPECIES_BY_A_Z: {
      const species = state.species || [];
      const sortedSpecies = sortHelper(state.sortByAZ, state.sortByZA, species);
      return {
        ...state,
        species: sortedSpecies,
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_SPECIES_BY_Z_A: {
      const species = state.species || [];
      const sortedSpecies = sortHelper(state.sortByAZ, state.sortByZA, species);
      return {
        ...state,
        species: sortedSpecies,
        sortByAZ: false,
        sortByZA: action.sortByZA
      };
    }
    default: return state;
  }
};

export default speciesReducer;
