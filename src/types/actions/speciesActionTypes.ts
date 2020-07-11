import { Race } from '../entities/entities';
import {
  GET_RACE,
  GET_SPECIES,
  SET_RACE,
  SET_SPECIES,
  SORT_SPECIES_BY_A_Z,
  SORT_SPECIES_BY_Z_A
} from '../../constants/actionTypeConstants';

export type SpeciesActionType = SetSpecies | SetRace | SortSpeciesByAZ | SortSpeciesByZA

export interface GetSpecies {type: typeof GET_SPECIES, page: string}
export interface SetSpecies {
  type: typeof SET_SPECIES,
  species: Array<Race>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetRace {type: typeof GET_RACE, raceId: number}
export interface SetRace {type: typeof SET_RACE, race: Race}
export interface SortSpeciesByAZ {type: typeof SORT_SPECIES_BY_A_Z, sortByAZ: boolean}
export interface SortSpeciesByZA {type: typeof SORT_SPECIES_BY_Z_A, sortByZA: boolean}
