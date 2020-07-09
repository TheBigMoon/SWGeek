import { VehiclesStore } from '../../types/store/store';
import { VehiclesActionType } from '../../types/actions';
import { SET_VEHICLE, SET_VEHICLES } from '../actions/actions';

const initialState: VehiclesStore = {
  vehicles: null,
  vehicle: null
};

const vehiclesReducer = (state = initialState, action: VehiclesActionType): VehiclesStore => {
  switch (action.type) {
    case SET_VEHICLES: {
      return {
        ...state,
        vehicles: [...action.vehicles]
      };
    }
    case SET_VEHICLE: {
      return {
        ...state,
        vehicle: action.vehicle
      };
    }
    default: return state;
  }
};

export default vehiclesReducer;
