import {
  GET_VEHICLE, GET_VEHICLES, SET_VEHICLE, SET_VEHICLES
} from '../../redux/actions/actions';
import { Vehicle } from '../entities/entities';

export type VehiclesActionType = SetVehicles | SetVehicle

export interface GetVehicles {type: typeof GET_VEHICLES}
export interface SetVehicles {type: typeof SET_VEHICLES, vehicles: Array<Vehicle>}
export interface GetVehicle {type: typeof GET_VEHICLE, vehicleId: number}
export interface SetVehicle {type: typeof SET_VEHICLE, vehicle: Vehicle}
