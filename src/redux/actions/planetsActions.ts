import {
  GetPlanet,
  GetPlanets, SetPlanet,
  SetPlanets,
  SortPlanetsByAZ,
  SortPlanetsByZA
} from '../../types/actions/planetsActionTypes';
import {
  GET_PLANET,
  GET_PLANETS, SET_PLANET,
  SET_PLANETS,
  SORT_PLANETS_BY_A_Z,
  SORT_PLANETS_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Planet } from '../../types/entities/entities';

export const getPlanets = (page: string): GetPlanets => ({ type: GET_PLANETS, page });
export const setPlanets = (
  planets: Array<Planet>,
  prevPage: string | null,
  nextPage: string | null
): SetPlanets => ({
  type: SET_PLANETS, planets, prevPage, nextPage
});
export const sortPlanetsByAZ = (sortByAZ: boolean): SortPlanetsByAZ => (
  { type: SORT_PLANETS_BY_A_Z, sortByAZ }
);
export const sortPlanetsByZA = (sortByZA: boolean): SortPlanetsByZA => (
  { type: SORT_PLANETS_BY_Z_A, sortByZA }
);
export const getPlanet = (planetId: number): GetPlanet => ({ type: GET_PLANET, planetId });
export const setPlanet = (planet: Planet): SetPlanet => ({ type: SET_PLANET, planet });
