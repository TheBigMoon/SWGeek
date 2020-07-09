import { Vehicle } from '../entities/entities';
import {
  GET_VEHICLE, GET_VEHICLES, SET_VEHICLE, SET_VEHICLES
} from '../../constants/actionTypeConstants';

export type VehiclesActionType = SetVehicles | SetVehicle

export interface GetVehicles {type: typeof GET_VEHICLES, page: string}
export interface SetVehicles {
  type: typeof SET_VEHICLES,
  vehicles: Array<Vehicle>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetVehicle {type: typeof GET_VEHICLE, vehicleId: number}
export interface SetVehicle {type: typeof SET_VEHICLE, vehicle: Vehicle}
