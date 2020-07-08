import {
  Film, Person, Planet, Species, Starship, Vehicle
} from '../entities/entities';

export interface PeopleStore {
  people: Array<Person> | null,
  person: Person | null
}

export interface FilmsStore {
  films: Array<Film> | null,
  film: Film | null
}

export interface StarhipsStore {
  starships: Array<Starship> | null,
  starship: Starship | null
}

export interface VehiclesStore {
  vehicles: Array<Vehicle> | null,
  vehicle: Vehicle | null
}

export interface SpeciesStore {
  species: Array<Species> | null,
  race: Film | null
}

export interface PlanetsStore {
  planets: Array<Planet> | null,
  planet: Planet | null
}
