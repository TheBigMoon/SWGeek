import {
  GetFilm,
  GetFilms,
  SetFilm,
  SetFilms,
  SortFilmsByAZ,
  SortFilmsByZA
} from '../../types/actions/filmsActionsTypes';
import {
  GET_FILM,
  GET_FILMS,
  SET_FILM,
  SET_FILMS,
  SORT_FILMS_BY_A_Z,
  SORT_FILMS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Film } from '../../types/entities/entities';

export const getFilms = (page: string): GetFilms => ({ type: GET_FILMS, page });
export const setFilms = (
  films: Array<Film>,
  prevPage: string | null,
  nextPage: string | null
): SetFilms => ({
  type: SET_FILMS, films, prevPage, nextPage
});
export const getFilm = (filmId: number): GetFilm => ({ type: GET_FILM, filmId });
export const setFilm = (film: Film): SetFilm => ({ type: SET_FILM, film });
export const sortFilmsByAZ = (sortByAZ: boolean): SortFilmsByAZ => (
  { type: SORT_FILMS_BY_A_Z, sortByAZ }
);
export const sortFilmsByZA = (sortByZA: boolean): SortFilmsByZA => (
  { type: SORT_FILMS_BY_Z_A, sortByZA }
);
