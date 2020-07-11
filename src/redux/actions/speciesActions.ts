import {
  GetRace,
  GetSpecies, SetRace,
  SetSpecies,
  SortSpeciesByAZ,
  SortSpeciesByZA
} from '../../types/actions/speciesActionTypes';
import {
  GET_RACE,
  GET_SPECIES, SET_RACE,
  SET_SPECIES,
  SORT_SPECIES_BY_A_Z,
  SORT_SPECIES_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Race } from '../../types/entities/entities';

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
