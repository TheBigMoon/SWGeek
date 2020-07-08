import {Film, People, Planet, Species, Starship, Vehicle} from "../entities/entities";

export interface PeopleStore {
  people: Array<People>,
  person: People
}

export interface FilmsStore {
  films: Array<Film> | null,
  film: Film
}

export interface StarhipsStore {
  starships: Array<Starship> | null,
  starship: Starship
}

export interface VehiclesStore {
  vehicles: Array<Vehicle> | null,
  vehicle: Vehicle
}

export interface SpeciesStore {
  species: Array<Species> | null,
  race: Film
}

export interface PlanetsStore {
  planets: Array<Planet> | null,
  planet: Planet
}
