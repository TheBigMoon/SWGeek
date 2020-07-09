import {
  GetFilm,
  GetFilms,
  GetPeoples,
  GetPerson,
  SetFilm,
  SetFilms,
  SetPeople,
  SetPerson
} from '../../types/actions';
import { Film, Person } from '../../types/entities/entities';

export const GET_PEOPLE = 'GET_PEOPLE';
export const SET_PEOPLE = 'SET_PEOPLE';
export const GET_PERSON = 'GET_PERSON';
export const SET_PERSON = 'SET_PERSON';
export const GET_FILMS = 'GET_FILMS';
export const SET_FILMS = 'SET_FILMS';
export const GET_FILM = 'GET_FILM';
export const SET_FILM = 'SET_FILM';


// PEOPLE ACTIONS
export const getPeoples = (): GetPeoples => ({ type: GET_PEOPLE });
export const setPeoples = (people: Array<Person>): SetPeople => ({ type: SET_PEOPLE, people });
export const getPerson = (personId: number): GetPerson => ({ type: GET_PERSON, personId});
export const setPerson = (person: Person): SetPerson => ({ type: SET_PERSON, person });

// FILMS ACTIONS
export const getFilms = (): GetFilms => ({ type: GET_FILMS });
export const setFilms = (films: Array<Film>): SetFilms => ({ type: SET_FILMS, films });
export const getFilm = (filmId: number): GetFilm => ({ type: GET_FILM, filmId });
export const setFilm = (film: Film): SetFilm => ({ type: SET_FILM, film });
