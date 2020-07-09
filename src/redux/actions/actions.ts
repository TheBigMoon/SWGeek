import {
  GetFilm,
  GetFilms,
  GetPeoples,
  GetPerson, GetStarship, GetStarships, GetVehicle, GetVehicles,
  SetFilm,
  SetFilms,
  SetPeople,
  SetPerson, SetStarship, SetStarships, SetVehicle, SetVehicles
} from '../../types/actions';
import {Film, Person, Starship, Vehicle} from '../../types/entities/entities';

export const GET_PEOPLE = 'GET_PEOPLE';
export const SET_PEOPLE = 'SET_PEOPLE';
export const GET_PERSON = 'GET_PERSON';
export const SET_PERSON = 'SET_PERSON';
export const GET_FILMS = 'GET_FILMS';
export const SET_FILMS = 'SET_FILMS';
export const GET_FILM = 'GET_FILM';
export const SET_FILM = 'SET_FILM';
export const GET_STARSHIPS = 'GET_STARSHIPS';
export const SET_STARSHIPS = 'SET_STARSHIPS';
export const GET_STARSHIP = 'GET_STARSHIP';
export const SET_STARSHIP = 'SET_STARSHIP';
export const GET_VEHICLES = 'GET_VEHICLES';
export const SET_VEHICLES = 'SET_VEHICLES';
export const GET_VEHICLE = 'GET_VEHICLE';
export const SET_VEHICLE = 'SET_VEHICLE';

// PEOPLE ACTIONS
export const getPeoples = (): GetPeoples => ({ type: GET_PEOPLE });
export const setPeoples = (people: Array<Person>): SetPeople => ({ type: SET_PEOPLE, people });
export const getPerson = (personId: number): GetPerson => ({ type: GET_PERSON, personId });
export const setPerson = (person: Person): SetPerson => ({ type: SET_PERSON, person });

// FILMS ACTIONS
export const getFilms = (): GetFilms => ({ type: GET_FILMS });
export const setFilms = (films: Array<Film>): SetFilms => ({ type: SET_FILMS, films });
export const getFilm = (filmId: number): GetFilm => ({ type: GET_FILM, filmId });
export const setFilm = (film: Film): SetFilm => ({ type: SET_FILM, film });

// STARSHIPS ACTIONS
export const getStarships = (): GetStarships => ({ type: GET_STARSHIPS });
export const setStarships = (starships: Array<Starship>): SetStarships => (
  { type: SET_STARSHIPS, starships }
);
export const getStarship = (starshipId: number): GetStarship => (
  { type: GET_STARSHIP, starshipId }
);
export const setStarship = (starship: Starship): SetStarship => ({ type: SET_STARSHIP, starship });

// VEHICLES ACTIONS
export const getVehicles = (): GetVehicles => ({ type: GET_VEHICLES });
export const setVehicles = (vehicles: Array<Vehicle>): SetVehicles => (
  { type: SET_VEHICLES, vehicles }
);
export const getVehicle = (vehicleId: number): GetVehicle => ({ type: GET_VEHICLE, vehicleId });
export const setVehicle = (vehicle: Vehicle): SetVehicle => ({ type: SET_VEHICLE, vehicle });
