import React from 'react';
import { Planet } from '../../../types/entities/entities';
import InfoBlock from '../infoBlock/InfoBlock';

interface PlanetProps {
  planet: Planet | null
}

const PlanetItem: React.FC<PlanetProps> = ({ planet }) => (
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
    <InfoBlock links={planet?.residents} linksName="Resident" name="Residents" />
    <InfoBlock links={planet?.films} linksName="Film" name="Films" />
  </div>
);

export default PlanetItem;
