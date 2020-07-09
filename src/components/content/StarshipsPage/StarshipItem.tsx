import React from 'react';
import { Starship } from '../../../types/entities/entities';

interface FilmProps {
  starship: Starship | null
}

const StarshipItem: React.FC<FilmProps> = ({ starship }) => {
  const pilots = starship?.pilots.map((pilot) => <div>{pilot}</div>);
  const films = starship?.films.map((film) => <div>{film}</div>);

  return (
    <div>
      <div>{`Name: ${starship?.name}`}</div>
      <div>{`Model: ${starship?.model}`}</div>
      <div>{`Manufacturer: ${starship?.manufacturer}`}</div>
      <div>{`Cost in credits: ${starship?.cost_in_credits}`}</div>
      <div>{`Length: ${starship?.length}`}</div>
      <div>{`Max atmosphering speed: ${starship?.max_atmosphering_speed}`}</div>
      <div>{`Crew: ${starship?.crew}`}</div>
      <div>{`Passengers: ${starship?.passengers}`}</div>
      <div>{`Cargo capacity: ${starship?.cargo_capacity}`}</div>
      <div>{`Consumables: ${starship?.consumables}`}</div>
      <div>{`Hyperdrive_rating: ${starship?.hyperdrive_rating}`}</div>
      <div>{`MGLT: ${starship?.MGLT}`}</div>
      <div>{`Starship_class: ${starship?.starship_class}`}</div>
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

export default StarshipItem;
