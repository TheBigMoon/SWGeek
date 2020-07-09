import { StarhipsStore } from '../../types/store/store';
import { StarshipsActionType } from '../../types/actions';
import { SET_STARSHIP, SET_STARSHIPS } from '../actions/actions';

const initialState: StarhipsStore = {
  starships: null,
  starship: null
};

const starshipsReducer = (state = initialState, action: StarshipsActionType): StarhipsStore => {
  switch (action.type) {
    case SET_STARSHIPS: {
      return {
        ...state,
        starships: [...action.starships]
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
