import { Race } from '../entities/entities';
import {
  GET_RACE, GET_SPECIES, SET_RACE, SET_SPECIES
} from '../../constants/actionTypeConstants';

export type SpeciesActionType = SetSpecies | SetRace

export interface GetSpecies {type: typeof GET_SPECIES}
export interface SetSpecies {type: typeof SET_SPECIES, species: Array<Race>}
export interface GetRace {type: typeof GET_RACE, raceId: number}
export interface SetRace {type: typeof SET_RACE, race: Race}
