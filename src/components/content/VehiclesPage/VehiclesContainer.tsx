import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import { getVehicles } from '../../../redux/actions/actions';
import VehicleItem from './VehicleItem';

interface StateToProps {
  vehicles: Array<Vehicle> | null
}

interface DispatchToProps {
  getVehicles: () => void
}

const VehiclesContainer: React.FC<StateToProps & DispatchToProps> = (
  { vehicles, getVehicles }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch, getVehicles]);
  const allVehicles = vehicles?.map((vehicle) => <VehicleItem vehicle={vehicle} />);
  return (
    <div>
      Vehicles
      <div>
        {allVehicles}
      </div>
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  vehicles: state.vehiclesPage.vehicles
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getVehicles
  }
)(VehiclesContainer);
