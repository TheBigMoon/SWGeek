import {
  GetStarship,
  GetStarships, SetStarship,
  SetStarships,
  SortStarshipsByAZ,
  SortStarshipsByZA
} from '../../types/actions/starshipsActionsTypes';
import {
  GET_STARSHIP,
  GET_STARSHIPS, SET_STARSHIP,
  SET_STARSHIPS,
  SORT_STARSHIPS_BY_A_Z,
  SORT_STARSHIPS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Starship } from '../../types/entities/entities';

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
