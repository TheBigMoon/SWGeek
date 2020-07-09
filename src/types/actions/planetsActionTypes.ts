import { Planet } from '../entities/entities';
import {
  GET_PLANET, GET_PLANETS, SET_PLANET, SET_PLANETS
} from '../../constants/actionTypeConstants';

export type PlanetsActionType = SetPlanets | SetPlanet

export interface GetPlanets {type: typeof GET_PLANETS, page: string}
export interface SetPlanets {
  type: typeof SET_PLANETS,
  planets: Array<Planet>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetPlanet {type: typeof GET_PLANET, planetId: number}
export interface SetPlanet {type: typeof SET_PLANET, planet: Planet}
