import {
  GetVehicle,
  GetVehicles, SetVehicle,
  SetVehicles,
  SortVehiclesByAZ,
  SortVehiclesByZA
} from '../../types/actions/vehiclesActionTypes';
import {
  GET_VEHICLE,
  GET_VEHICLES, SET_VEHICLE,
  SET_VEHICLES,
  SORT_VEHICLES_BY_A_Z,
  SORT_VEHICLES_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Vehicle } from '../../types/entities/entities';

export const getVehicles = (page: string): GetVehicles => ({ type: GET_VEHICLES, page });
export const setVehicles = (
  vehicles: Array<Vehicle>,
  prevPage: string | null,
  nextPage: string | null
): SetVehicles => ({
  type: SET_VEHICLES, vehicles, prevPage, nextPage
});
export const sortVehiclesByAZ = (sortByAZ: boolean): SortVehiclesByAZ => (
  { type: SORT_VEHICLES_BY_A_Z, sortByAZ }
);
export const sortVehiclesByZA = (sortByZA: boolean): SortVehiclesByZA => (
  { type: SORT_VEHICLES_BY_Z_A, sortByZA }
);
export const getVehicle = (vehicleId: number): GetVehicle => ({ type: GET_VEHICLE, vehicleId });
export const setVehicle = (vehicle: Vehicle): SetVehicle => ({ type: SET_VEHICLE, vehicle });
