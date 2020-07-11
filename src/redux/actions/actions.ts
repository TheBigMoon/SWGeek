import {
  GET_FILM,
  GET_FILMS,
  GET_PEOPLE,
  GET_PERSON,
  GET_PLANET,
  GET_PLANETS,
  GET_RACE,
  GET_SPECIES,
  GET_STARSHIP,
  GET_STARSHIPS,
  GET_VEHICLE,
  GET_VEHICLES,
  SET_FILM,
  SET_FILMS,
  SET_PEOPLE,
  SET_PERSON,
  SET_PLANET,
  SET_PLANETS,
  SET_RACE,
  SET_SPECIES,
  SET_STARSHIP,
  SET_STARSHIPS,
  SET_VEHICLE,
  SET_VEHICLES,
  SORT_FILMS_BY_A_Z,
  SORT_FILMS_BY_Z_A,
  SORT_PEOPLE_BY_A_Z,
  SORT_PEOPLE_BY_Z_A,
  SORT_PLANETS_BY_A_Z,
  SORT_PLANETS_BY_Z_A,
  SORT_SPECIES_BY_A_Z,
  SORT_SPECIES_BY_Z_A,
  SORT_STARSHIPS_BY_A_Z,
  SORT_STARSHIPS_BY_Z_A,
  SORT_VEHICLES_BY_A_Z,
  SORT_VEHICLES_BY_Z_A
} from '../../constants/actionTypeConstants';
import {Film, Person, Planet, Race, Starship, Vehicle} from '../../types/entities/entities';
import {
  GetPeople,
  GetPerson,
  SetPeople,
  SetPerson,
  SortPeopleByAZ,
  SortPeopleByZA
} from '../../types/actions/peopleActionsTypes';
import {
  GetFilm,
  GetFilms,
  SetFilm,
  SetFilms,
  SortFilmsByAZ,
  SortFilmsByZA
} from '../../types/actions/filmsActionsTypes';
import {
  GetStarship,
  GetStarships,
  SetStarship,
  SetStarships,
  SortStarshipsByAZ,
  SortStarshipsByZA
} from '../../types/actions/starshipsActionsTypes';
import {
  GetVehicle,
  GetVehicles,
  SetVehicle,
  SetVehicles,
  SortVehiclesByAZ,
  SortVehiclesByZA
} from '../../types/actions/vehiclesActionTypes';
import {
  GetRace,
  GetSpecies,
  SetRace,
  SetSpecies,
  SortSpeciesByAZ,
  SortSpeciesByZA
} from '../../types/actions/speciesActionTypes';
import {
  GetPlanet,
  GetPlanets,
  SetPlanet,
  SetPlanets,
  SortPlanetsByAZ,
  SortPlanetsByZA
} from '../../types/actions/planetsActionTypes';

// PEOPLE ACTIONS
export const getPeople = (page: string): GetPeople => ({ type: GET_PEOPLE, page });
export const setPeople = (
  people: Array<Person>, prevPage: string | null, nextPage: string | null
): SetPeople => ({
  type: SET_PEOPLE, people, prevPage, nextPage
});
export const sortPeopleByAZ = (sortByAZ: boolean): SortPeopleByAZ => (
  { type: SORT_PEOPLE_BY_A_Z, sortByAZ }
);
export const sortPeopleByZA = (sortByZA: boolean): SortPeopleByZA => (
  { type: SORT_PEOPLE_BY_Z_A, sortByZA }
);
export const getPerson = (personId: number): GetPerson => ({ type: GET_PERSON, personId });
export const setPerson = (person: Person): SetPerson => ({ type: SET_PERSON, person });

// FILMS ACTIONS
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

// STARSHIPS ACTIONS
export const getStarships = (page: string): GetStarships => ({ type: GET_STARSHIPS, page });
export const setStarships = (
  starships: Array<Starship>,
  prevPage: string | null,
  nextPage: string | null
): SetStarships => ({
  type: SET_STARSHIPS, starships, prevPage, nextPage
});
export const sortStarshipsByAZ = (sortByAZ: boolean): SortStarshipsByAZ => (
  { type: SORT_STARSHIPS_BY_A_Z, sortByAZ }
);
export const sortStarshipsByZA = (sortByZA: boolean): SortStarshipsByZA => (
  { type: SORT_STARSHIPS_BY_Z_A, sortByZA }
);
export const getStarship = (starshipId: number): GetStarship => (
  { type: GET_STARSHIP, starshipId }
);
export const setStarship = (starship: Starship): SetStarship => ({ type: SET_STARSHIP, starship });

// VEHICLES ACTIONS
export const getVehicles = (page: string): GetVehicles => ({ type: GET_VEHICLES, page });
export const setVehicles = (
  vehicles: Array<Vehicle>,
  prevPage: string | null,
  nextPage: string | null
): SetVehicles => ({
  type: SET_VEHICLES, vehicles, prevPage, nextPage
});
export const sortVehiclesByAZ = (sortByAZ: boolean): SortVehiclesByAZ => (
  { type: SORT_VEHICLES_BY_A_Z, sortByAZ }
);
export const sortVehiclesByZA = (sortByZA: boolean): SortVehiclesByZA => (
  { type: SORT_VEHICLES_BY_Z_A, sortByZA }
);
export const getVehicle = (vehicleId: number): GetVehicle => ({ type: GET_VEHICLE, vehicleId });
export const setVehicle = (vehicle: Vehicle): SetVehicle => ({ type: SET_VEHICLE, vehicle });

// SPECIES ACTIONS
export const getSpecies = (page: string): GetSpecies => ({ type: GET_SPECIES, page });
export const setSpecies = (
  species: Array<Race>,
  prevPage: string | null,
  nextPage: string | null
): SetSpecies => ({
  type: SET_SPECIES, species, prevPage, nextPage
});
export const sortSpeciesByAZ = (sortByAZ: boolean): SortSpeciesByAZ => (
  { type: SORT_SPECIES_BY_A_Z, sortByAZ }
);
export const sortSpeciesByZA = (sortByZA: boolean): SortSpeciesByZA => (
  { type: SORT_SPECIES_BY_Z_A, sortByZA }
);
export const getRace = (raceId: number): GetRace => ({ type: GET_RACE, raceId });
export const setRace = (race: Race): SetRace => ({ type: SET_RACE, race });

// PLANETS ACTIONS
export const getPlanets = (page: string): GetPlanets => ({ type: GET_PLANETS, page });
export const setPlanets = (
  planets: Array<Planet>,
  prevPage: string | null,
  nextPage: string | null
): SetPlanets => ({
  type: SET_PLANETS, planets, prevPage, nextPage
});
export const sortPlanetByZA = (sortByAZ: boolean): SortPlanetsByAZ => (
  { type: SORT_PLANETS_BY_A_Z, sortByAZ }
);
export const sortPlanetByAZ = (sortByZA: boolean): SortPlanetsByZA => (
  { type: SORT_PLANETS_BY_Z_A, sortByZA }
);
export const getPlanet = (planetId: number): GetPlanet => ({ type: GET_PLANET, planetId });
export const setPlanet = (planet: Planet): SetPlanet => ({ type: SET_PLANET, planet });
