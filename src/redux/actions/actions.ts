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
  SET_VEHICLES
} from '../../constants/actionTypeConstants';
import {
  Film, Person, Planet, Race, Starship, Vehicle
} from '../../types/entities/entities';
import {
  GetPeople, GetPerson, SetPeople, SetPerson
} from '../../types/actions/peopleActionsTypes';
import {
  GetFilm, GetFilms, SetFilm, SetFilms
} from '../../types/actions/filmsActionsTypes';
import {
  GetStarship, GetStarships, SetStarship, SetStarships
} from '../../types/actions/starshipsActionsTypes';
import {
  GetVehicle, GetVehicles, SetVehicle, SetVehicles
} from '../../types/actions/vehiclesActionTypes';
import {
  GetRace, GetSpecies, SetRace, SetSpecies
} from '../../types/actions/speciesActionTypes';
import {
  GetPlanet, GetPlanets, SetPlanet, SetPlanets
} from '../../types/actions/planetsActionTypes';

// PEOPLE ACTIONS
export const getPeople = (page: string): GetPeople => ({ type: GET_PEOPLE, page });
export const setPeople = (
  people: Array<Person>, prevPage: string | null, nextPage: string | null
): SetPeople => ({
  type: SET_PEOPLE, people, prevPage, nextPage
});
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

// SPECIES ACTIONS
export const getSpecies = (): GetSpecies => ({ type: GET_SPECIES });
export const setSpecies = (species: Array<Race>): SetSpecies => ({ type: SET_SPECIES, species });
export const getRace = (raceId: number): GetRace => ({ type: GET_RACE, raceId });
export const setRace = (race: Race): SetRace => ({ type: SET_RACE, race });

// PLANETS ACTIONS
export const getPlanets = (): GetPlanets => ({ type: GET_PLANETS });
export const setPlanets = (planets: Array<Planet>): SetPlanets => ({ type: SET_PLANETS, planets });
export const getPlanet = (planetId: number): GetPlanet => ({ type: GET_PLANET, planetId });
export const setPlanet = (planet: Planet): SetPlanet => ({ type: SET_PLANET, planet });
