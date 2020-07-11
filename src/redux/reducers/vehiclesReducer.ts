import {VehiclesStore} from '../../types/store/store';
import {VehiclesActionType} from '../../types/actions/vehiclesActionTypes';
import {
  SET_VEHICLE,
  SET_VEHICLES,
  SORT_VEHICLES_BY_A_Z,
  SORT_VEHICLES_BY_Z_A
} from '../../constants/actionTypeConstants';
import {sortHelper} from "./reducerHelpers/sortHelper";

const initialState: VehiclesStore = {
  vehicles: null,
  vehicle: null,
  prevPage: null,
  nextPage: null,
  sortByAZ: false,
  sortByZA: false
};

const vehiclesReducer = (state = initialState, action: VehiclesActionType): VehiclesStore => {
  switch (action.type) {
    case SET_VEHICLES: {
      const vehicles = sortHelper(state.sortByAZ, state.sortByZA, action.vehicles);
      return {
        ...state,
        vehicles,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      };
    }
    case SET_VEHICLE: {
      return {
        ...state,
        vehicle: action.vehicle
      };
    }
    case SORT_VEHICLES_BY_A_Z: {
      const vehicles = state.vehicles || [];
      const sortedVehicles = sortHelper(state.sortByAZ, state.sortByZA, vehicles);
      return {
        ...state,
        vehicles: sortedVehicles,
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_VEHICLES_BY_Z_A: {
      const vehicles = state.vehicles || [];
      const sortedVehicles = sortHelper(state.sortByAZ, state.sortByZA, vehicles);
      return {
        ...state,
        vehicles: sortedVehicles,
        sortByAZ: false,
        sortByZA: action.sortByZA
      };
    }
    default: return state;
  }
};

export default vehiclesReducer;
