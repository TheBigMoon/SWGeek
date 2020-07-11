import { PlanetsStore } from '../../types/store/store';
import { PlanetsActionType } from '../../types/actions/planetsActionTypes';
import {
  SET_PLANET, SET_PLANETS, SORT_PLANETS_BY_A_Z, SORT_PLANETS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { sortHelper } from './reducerHelpers/sortHelper';

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
      const planets = sortHelper(state.sortByAZ, state.sortByZA, action.planets);
      return {
        ...state,
        planets,
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
    case SORT_PLANETS_BY_A_Z: {
      const planets = state.planets || [];
      const sortedPlanets = sortHelper(state.sortByAZ, state.sortByZA, planets);
      return {
        ...state,
        planets: sortedPlanets,
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_PLANETS_BY_Z_A: {
      const planets = state.planets || [];
      const sortedPlanets = sortHelper(state.sortByAZ, state.sortByZA, planets);
      return {
        ...state,
        planets: sortedPlanets,
        sortByAZ: false,
        sortByZA: action.sortByZA
      };
    }
    default: return state;
  }
};

export default planetsReducer;
