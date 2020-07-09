import React from 'react';
import { Vehicle } from '../../../types/entities/entities';
import InfoBlock from '../infoBlock/InfoBlock';

interface VehicleProps {
  vehicle: Vehicle | null
}

const VehicleItem: React.FC<VehicleProps> = ({ vehicle }) => (
  <>
    <div>{`Name: ${vehicle?.name}`}</div>
    <div>{`Model: ${vehicle?.model}`}</div>
    <div>{`Manufacturer: ${vehicle?.manufacturer}`}</div>
    <div>{`Cost in credits: ${vehicle?.cost_in_credits}`}</div>
    <div>{`Length: ${vehicle?.length}`}</div>
    <div>{`Max atmosphering speed: ${vehicle?.max_atmosphering_speed}`}</div>
    <div>{`Crew: ${vehicle?.crew}`}</div>
    <div>{`Passengers: ${vehicle?.passengers}`}</div>
    <div>{`Cargo capacity: ${vehicle?.cargo_capacity}`}</div>
    <div>{`Consumables: ${vehicle?.consumables}`}</div>
    <div>{`Hyperdrive_rating: ${vehicle?.vehicle_class}`}</div>
    <InfoBlock links={vehicle?.pilots} linksName="Pilot" name="Pilots" />
    <InfoBlock links={vehicle?.films} linksName="Film" name="Films" />
  </>
);

export default VehicleItem;
