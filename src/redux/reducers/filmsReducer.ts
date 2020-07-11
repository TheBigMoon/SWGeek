import { FilmsStore } from '../../types/store/store';
import { FilmsActionType } from '../../types/actions/filmsActionsTypes';
import {
  SET_FILM, SET_FILMS, SORT_FILMS_BY_A_Z, SORT_FILMS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { filmSorter } from './reducerHelpers/sortHelpers';

const initialState: FilmsStore = {
  films: null,
  film: null,
  sortByAZ: false,
  sortByZA: false
};

const filmsReducer = (state = initialState, action: FilmsActionType): FilmsStore => {
  switch (action.type) {
    case SET_FILMS: {
      const films = filmSorter(state.sortByAZ, state.sortByZA, action.films);
      return {
        ...state,
        films
      };
    }
    case SET_FILM: {
      return {
        ...state,
        film: action.film
      };
    }
    case SORT_FILMS_BY_A_Z: {
      const films = state.films || [];
      const sortedFilms = filmSorter(state.sortByAZ, state.sortByZA, films);
      return {
        ...state,
        films: [...sortedFilms],
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_FILMS_BY_Z_A: {
      const films = state.films || [];
      const sortedFilms = filmSorter(state.sortByAZ, state.sortByZA, films);
      return {
        ...state,
        films: [...sortedFilms],
        sortByZA: action.sortByZA,
        sortByAZ: false
      };
    }
    default: return state;
  }
};

export default filmsReducer;
