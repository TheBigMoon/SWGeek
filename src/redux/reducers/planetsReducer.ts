import { PlanetsStore } from '../../types/store/store';
import { PlanetsActionType } from '../../types/actions/planetsActionTypes';
import { SET_PLANET, SET_PLANETS } from '../../constants/actionTypeConstants';

const initialState: PlanetsStore = {
  planets: null,
  planet: null
};

const planetsReducer = (state = initialState, action: PlanetsActionType): PlanetsStore => {
  switch (action.type) {
    case SET_PLANETS: {
      return {
        ...state,
        planets: [...action.planets]
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