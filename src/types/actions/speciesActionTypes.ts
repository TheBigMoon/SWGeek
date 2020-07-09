import {
  GET_RACE, GET_SPECIES, SET_RACE, SET_SPECIES
} from '../../redux/actions/actions';
import { Race } from '../entities/entities';

export type SpeciesActionType = SetSpecies | SetRace

export interface GetSpecies {type: typeof GET_SPECIES}
export interface SetSpecies {type: typeof SET_SPECIES, species: Array<Race>}
export interface GetRace {type: typeof GET_RACE, raceId: number}
export interface SetRace {type: typeof SET_RACE, race: Race}
