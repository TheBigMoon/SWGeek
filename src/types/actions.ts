import {
  GET_FILM,
  GET_FILMS,
  GET_PEOPLE,
  GET_PERSON,
  GET_STARSHIP,
  GET_STARSHIPS,
  SET_FILM,
  SET_FILMS,
  SET_PEOPLE,
  SET_PERSON,
  SET_STARSHIP,
  SET_STARSHIPS
} from '../redux/actions/actions';
import { Film, Person, Starship } from './entities/entities';

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

export type StarshipsActionType = SetStarships | SetStarship

export interface GetStarships {type: typeof GET_STARSHIPS}
export interface SetStarships {type: typeof SET_STARSHIPS, starships: Array<Starship>}
export interface GetStarship {type: typeof GET_STARSHIP, starshipId: number}
export interface SetStarship {type: typeof SET_STARSHIP, starship: Starship}
