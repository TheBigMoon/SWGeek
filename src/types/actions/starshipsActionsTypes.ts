import {
  GET_STARSHIP, GET_STARSHIPS, SET_STARSHIP, SET_STARSHIPS
} from '../../redux/actions/actions';
import { Starship } from '../entities/entities';

export type StarshipsActionType = SetStarships | SetStarship

export interface GetStarships {type: typeof GET_STARSHIPS}
export interface SetStarships {type: typeof SET_STARSHIPS, starships: Array<Starship>}
export interface GetStarship {type: typeof GET_STARSHIP, starshipId: number}
export interface SetStarship {type: typeof SET_STARSHIP, starship: Starship}
