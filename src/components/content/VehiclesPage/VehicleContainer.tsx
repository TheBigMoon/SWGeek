import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import VehicleItem from './VehicleItem';
import { getVehicle } from '../../../redux/actions/vehiclesActions';

interface StateToProps {
  vehicle: Vehicle | null
}

interface DispatchToProps {
  getVehicle: (vehicleId: number) => void
}

const VehicleContainer: React.FC<StateToProps & DispatchToProps> = ({ vehicle, getVehicle }) => {
  const { vehicleId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicle(vehicleId));
  }, [dispatch, getVehicle, vehicleId]);
  return (
    <div>
      <VehicleItem showLink={false} showInfoBlocks vehicle={vehicle} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  vehicle: state.vehiclesPage.vehicle
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getVehicle
  }
)(VehicleContainer);
