import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import { getVehicles } from '../../../redux/actions/actions';
import VehicleItem from './VehicleItem';
import Paginator from '../common/Paginator';
import { PageTitle } from '../../../styledComponents/common/common';
import SearchField from "../common/SearchField";

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
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles(search));
  }, [dispatch, getVehicles, search]);
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
      <SearchField getContent={getVehicles} />
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
