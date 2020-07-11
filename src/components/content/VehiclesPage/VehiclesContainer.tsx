import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import { getVehicles } from '../../../redux/actions/actions';
import VehicleItem from './VehicleItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';

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
  const allVehicles = vehicles?.map((vehicle) => (
    <VehicleItem
      showInfoBlocks={false}
      showLink
      vehicle={vehicle}
    />
  ));
  return (
    <div>
      <PageTitle>
        Vehicles
      </PageTitle>
      <Paginator prevPage={prevPage} nextPage={nextPage} />
      {allVehicles}
      <Paginator prevPage={prevPage} nextPage={nextPage} />
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
