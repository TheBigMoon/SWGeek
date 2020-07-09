import {
  GET_FILM,
  GET_FILMS,
  GET_PEOPLE, GET_PERSON, SET_FILM, SET_FILMS, SET_PEOPLE, SET_PERSON
} from '../redux/actions/actions';
import { Film, Person } from './entities/entities';

export type PeopleActionType = SetPeople | SetPerson

export interface GetPeoples {type: typeof GET_PEOPLE}
export interface SetPeople {type: typeof SET_PEOPLE, people: Array<Person>}
export interface GetPerson {type: typeof GET_PERSON, personId: number}
export interface SetPerson {type: typeof SET_PERSON, person: Person}

export type FilmsActionType = SetFilms | SetFilm

export interface GetFilms {type: typeof GET_FILMS}
export interface SetFilms {type: typeof SET_FILMS, films: Array<Film>}
export interface GetFilm {type: typeof GET_FILM, filmId: number}
export interface SetFilm {type: typeof SET_FILM, film: Film}
