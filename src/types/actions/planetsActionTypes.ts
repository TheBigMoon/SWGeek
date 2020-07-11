import { Planet } from '../entities/entities';
import {
  GET_PLANET,
  GET_PLANETS,
  SET_PLANET,
  SET_PLANETS,
  SORT_PLANETS_BY_A_Z,
  SORT_PLANETS_BY_Z_A
} from '../../constants/actionTypeConstants';

export type PlanetsActionType = SetPlanets | SetPlanet | SortPlanetsByAZ | SortPlanetsByZA

export interface GetPlanets {type: typeof GET_PLANETS, page: string}
export interface SetPlanets {
  type: typeof SET_PLANETS,
  planets: Array<Planet>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetPlanet {type: typeof GET_PLANET, planetId: number}
export interface SetPlanet {type: typeof SET_PLANET, planet: Planet}
export interface SortPlanetsByAZ {type: typeof SORT_PLANETS_BY_A_Z, sortByAZ: boolean}
export interface SortPlanetsByZA {type: typeof SORT_PLANETS_BY_Z_A, sortByZA: boolean}
