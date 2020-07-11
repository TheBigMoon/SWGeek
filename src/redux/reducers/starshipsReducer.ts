import { StarhipsStore } from '../../types/store/store';
import { StarshipsActionType } from '../../types/actions/starshipsActionsTypes';
import { SET_STARSHIP, SET_STARSHIPS } from '../../constants/actionTypeConstants';

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
      return {
        ...state,
        starships: [...action.starships],
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
    default: return state;
  }
};

export default starshipsReducer;
