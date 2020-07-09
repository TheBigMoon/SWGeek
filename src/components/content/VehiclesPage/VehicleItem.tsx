import React from 'react';
import { Vehicle } from '../../../types/entities/entities';

interface VehicleProps {
  vehicle: Vehicle | null
}

const VehicleItem: React.FC<VehicleProps> = ({ vehicle }) => {
  const pilots = vehicle?.pilots.map((pilot) => <div>{pilot}</div>);
  const films = vehicle?.films.map((film) => <div>{film}</div>);
  return (
    <div>
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
      <div>
        <p>Pilots</p>
        <div>
          {pilots}
        </div>
      </div>
      <div>
        <p>Films:</p>
        <div>
          {films}
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
