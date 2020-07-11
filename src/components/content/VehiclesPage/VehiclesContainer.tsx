import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { App } from '../../../redux/store';
import { Vehicle } from '../../../types/entities/entities';
import VehicleItem from './VehicleItem';
import Paginator from '../common/Paginator';
import { FlexBox, PageTitle } from '../../../styledComponents/common/common';
import SearchField from '../common/SearchField';
import Sorter from '../common/Sorter';
import { getVehicles, sortVehiclesByAZ, sortVehiclesByZA } from '../../../redux/actions/vehiclesActions';

interface StateToProps {
  vehicles: Array<Vehicle> | null,
  prevPage: string | null,
  nextPage: string | null
}

interface DispatchToProps {
  getVehicles: (page: string) => void,
  sortVehiclesByAZ: (sortByAZ: boolean) => void,
  sortVehiclesByZA: (sortByZA: boolean) => void
}

const VehiclesContainer: React.FC<StateToProps & DispatchToProps> = (
  {
    vehicles, prevPage, nextPage, getVehicles, sortVehiclesByAZ, sortVehiclesByZA
  }
) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles(search));
  }, [dispatch, getVehicles, search]);
  const allVehicles = vehicles?.map((vehicle) => (
    <VehicleItem
      key={vehicle.name}
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
      <FlexBox column={false} center>
        <SearchField getContent={getVehicles} />
        <Sorter sortByAZ={sortVehiclesByAZ} sortByZA={sortVehiclesByZA} />
      </FlexBox>
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
    getVehicles,
    sortVehiclesByAZ,
    sortVehiclesByZA
  }
)(VehiclesContainer);
