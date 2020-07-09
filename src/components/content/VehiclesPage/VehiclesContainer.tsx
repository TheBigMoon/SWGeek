import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import { getVehicles } from '../../../redux/actions/actions';
import VehicleItem from './VehicleItem';
import Paginator from '../common/Paginator';

interface StateToProps {
  vehicles: Array<Vehicle> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getVehicles: (page: string) => void
}

const VehiclesContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    vehicles, prevPage, nextPage, getVehicles
  }
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles(''));
  }, [dispatch, getVehicles]);
  const allVehicles = vehicles?.map((vehicle) => <VehicleItem vehicle={vehicle} />);
  return (
    <div>
      Vehicles
      <div>
        {allVehicles}
      </div>
      <Paginator prevPage={prevPage} nextPage={nextPage} getContent={getVehicles} />
    </div>
  );
};

const MapStateToProps = (state: App): StateToProps => ({
  vehicles: state.vehiclesPage.vehicles,
  prevPage: state.vehiclesPage.prevPage,
  nextPage: state.vehiclesPage.nextPage
});

export default connect<StateToProps, DispatchToProps, {}, App>(
  MapStateToProps, {
    getVehicles
  }
)(VehiclesContainer);
