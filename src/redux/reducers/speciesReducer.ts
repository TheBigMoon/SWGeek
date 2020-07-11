import { SpeciesStore } from '../../types/store/store';
import { SpeciesActionType } from '../../types/actions/speciesActionTypes';
import { SET_RACE, SET_SPECIES } from '../../constants/actionTypeConstants';

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
      return {
        ...state,
        species: [...action.species],
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
    default: return state;
  }
};

export default speciesReducer;
