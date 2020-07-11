import { Starship } from '../entities/entities';
import {
  GET_STARSHIP,
  GET_STARSHIPS,
  SET_STARSHIP,
  SET_STARSHIPS,
  SORT_STARSHIPS_BY_A_Z, SORT_STARSHIPS_BY_Z_A
} from '../../constants/actionTypeConstants';

export type StarshipsActionType = SetStarships | SetStarship

export interface GetStarships {type: typeof GET_STARSHIPS, page: string}
export interface SetStarships {
  type: typeof SET_STARSHIPS,
  starships: Array<Starship>,
  prevPage: string | null,
  nextPage: string | null}
export interface GetStarship {type: typeof GET_STARSHIP, starshipId: number}
export interface SetStarship {type: typeof SET_STARSHIP, starship: Starship}
export interface SortStarshipsByAZ {type: typeof SORT_STARSHIPS_BY_A_Z, sortByAZ: boolean}
export interface SortStarshipsByZA {type: typeof SORT_STARSHIPS_BY_Z_A, sortByZA: boolean}
