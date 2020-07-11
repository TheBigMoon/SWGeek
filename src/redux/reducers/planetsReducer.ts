import { PlanetsStore } from '../../types/store/store';
import { PlanetsActionType } from '../../types/actions/planetsActionTypes';
import { SET_PLANET, SET_PLANETS } from '../../constants/actionTypeConstants';

const initialState: PlanetsStore = {
  planets: null,
  planet: null,
  prevPage: null,
  nextPage: null,
  sortByAZ: false,
  sortByZA: false
};

const planetsReducer = (state = initialState, action: PlanetsActionType): PlanetsStore => {
  switch (action.type) {
    case SET_PLANETS: {
      return {
        ...state,
        planets: [...action.planets],
        prevPage: action.prevPage,
        nextPage: action.nextPage
      };
    }
    case SET_PLANET: {
      return {
        ...state,
        planet: action.planet
      };
    }
    default: return state;
  }
};

export default planetsReducer;
