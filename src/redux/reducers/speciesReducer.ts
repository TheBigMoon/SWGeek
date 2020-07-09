import { SpeciesStore } from '../../types/store/store';
import { SpeciesActionType } from '../../types/actions/speciesActionTypes';
import { SET_RACE, SET_SPECIES } from '../../constants/actionTypeConstants';

const initialState: SpeciesStore = {
  species: null,
  race: null
};

const speciesReducer = (state = initialState, action: SpeciesActionType): SpeciesStore => {
  switch (action.type) {
    case SET_SPECIES: {
      return {
        ...state,
        species: [...action.species]
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
