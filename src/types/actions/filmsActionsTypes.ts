import { Film } from '../entities/entities';
import {
  GET_FILM, GET_FILMS, SET_FILM, SET_FILMS
} from '../../constants/actionTypeConstants';

export type FilmsActionType = SetFilms | SetFilm

export interface GetFilms {type: typeof GET_FILMS, page: string}
export interface SetFilms {
  type: typeof SET_FILMS,
  films: Array<Film>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetFilm {type: typeof GET_FILM, filmId: number}
export interface SetFilm {type: typeof SET_FILM, film: Film}
