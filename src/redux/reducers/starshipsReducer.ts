import { StarhipsStore } from '../../types/store/store';
import { StarshipsActionType } from '../../types/actions/starshipsActionsTypes';
import {
  SET_STARSHIP,
  SET_STARSHIPS,
  SORT_STARSHIPS_BY_A_Z,
  SORT_STARSHIPS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { sortHelper } from './reducerHelpers/sortHelper';

const initialState: StarhipsStore = {
  starships: null,
  starship: null,
  prevPage: null,
  nextPage: null,
  sortByAZ: false,
  sortByZA: false
};

const starshipsReducer = (state = initialState, action: StarshipsActionType): StarhipsStore => {
  switch (action.type) {
    case SET_STARSHIPS: {
      const starships = sortHelper(state.sortByAZ, state.sortByZA, action.starships);
      return {
        ...state,
        starships,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      };
    }
    case SET_STARSHIP: {
      return {
        ...state,
        starship: action.starship
      };
    }
    case SORT_STARSHIPS_BY_A_Z: {
      const starships = state.starships || [];
      const sortedStarships = sortHelper(state.sortByAZ, state.sortByZA, starships);
      return {
        ...state,
        starships: sortedStarships,
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_STARSHIPS_BY_Z_A: {
      const starships = state.starships || [];
      const sortedStarships = sortHelper(state.sortByAZ, state.sortByZA, starships);
      return {
        ...state,
        starships: sortedStarships,
        sortByAZ: false,
        sortByZA: action.sortByZA
      };
    }
    default: return state;
  }
};

export default starshipsReducer;
