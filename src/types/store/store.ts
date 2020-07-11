import {
  Film, Person, Planet, Race, Starship, Vehicle
} from '../entities/entities';

interface SortStore {
  sortByAZ: boolean,
  sortByZA: boolean
}

interface PageStore {
  prevPage: string | null,
  nextPage: string | null
}

export interface PeopleStore extends SortStore, PageStore {
  people: Array<Person> | null,
  person: Person | null
}

export interface FilmsStore extends SortStore {
  films: Array<Film> | null,
  film: Film | null
}

export interface StarhipsStore extends SortStore, PageStore {
  starships: Array<Starship> | null,
  starship: Starship | null
}

export interface VehiclesStore extends SortStore, PageStore {
  vehicles: Array<Vehicle> | null,
  vehicle: Vehicle | null
}

export interface SpeciesStore extends SortStore, PageStore {
  species: Array<Race> | null,
  race: Race | null
}

export interface PlanetsStore extends SortStore, PageStore {
  planets: Array<Planet> | null,
  planet: Planet | null
}
