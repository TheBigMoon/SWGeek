import React from 'react';
import { Planet } from '../../../types/entities/entities';

interface PlanetProps {
  planet: Planet | null
}

const PlanetItem: React.FC<PlanetProps> = ({ planet }) => {
  const residents = planet?.residents.map((resident) => <div>{resident}</div>);
  const films = planet?.films.map((film) => <div>{film}</div>);

  return (
    <div>
      <div>{`Name: ${planet?.name}`}</div>
      <div>{`Rotation period: ${planet?.rotation_period}`}</div>
      <div>{`Orbital period: ${planet?.orbital_period}`}</div>
      <div>{`Diameter: ${planet?.diameter}`}</div>
      <div>{`Climate: ${planet?.climate}`}</div>
      <div>{`Gravity: ${planet?.gravity}`}</div>
      <div>{`Terrain: ${planet?.terrain}`}</div>
      <div>{`Surface water: ${planet?.surface_water}`}</div>
      <div>{`Population: ${planet?.population}`}</div>
      <div>
        <p>Residents</p>
        <div>
          {residents}
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

export default PlanetItem;
