import React from 'react';
import { Race } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';

interface RaceProps {
  race: Race | null
}

const RaceItem: React.FC<RaceProps> = ({ race }) => (
  <div>
    <div>{`Name: ${race?.name}`}</div>
    <div>{`Classification: ${race?.classification}`}</div>
    <div>{`Designation: ${race?.designation}`}</div>
    <div>{`Average height: ${race?.average_height}`}</div>
    <div>{`Skin colors: ${race?.skin_colors}`}</div>
    <div>{`Hair_colors: ${race?.hair_colors}`}</div>
    <div>{`Eye_colors: ${race?.eye_colors}`}</div>
    <div>{`Average_lifespan: ${race?.average_lifespan}`}</div>
    <div>{`Homeworld: ${race?.homeworld}`}</div>
    <div>{`Language: ${race?.language}`}</div>
    <InfoBlock links={race?.people} linksName="Race" name="People" />
    <InfoBlock links={race?.films} linksName="Film" name="Films" />
  </div>
);

export default RaceItem;
