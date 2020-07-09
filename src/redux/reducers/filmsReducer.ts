import { FilmsStore } from '../../types/store/store';
import { FilmsActionType } from '../../types/actions/filmsActionsTypes';
import { SET_FILM, SET_FILMS } from '../../constants/actionTypeConstants';

const initialState: FilmsStore = {
  films: null,
  film: null
};

const filmsReducer = (state = initialState, action: FilmsActionType): FilmsStore => {
  switch (action.type) {
    case SET_FILMS: {
      return {
        ...state,
        films: [...action.films]
      };
    }
    case SET_FILM: {
      return {
        ...state,
        film: action.film
      };
    }
    default: return state;
  }
};

export default filmsReducer;
