import React from 'react';
import { Person } from '../../../types/entities/entities';
import InfoBlock from '../infoBlock/InfoBlock';

interface PersonProps {
  person: Person | null
}

const PersonItem: React.FC<PersonProps> = ({ person }) => (
  <div>
    <div>{`Name: ${person?.name}`}</div>
    <div>{`Height: ${person?.height}`}</div>
    <div>{`Mass: ${person?.mass}`}</div>
    <div>{`Hair color: ${person?.hair_color}`}</div>
    <div>{`Skin color: ${person?.skin_color}`}</div>
    <div>{`Eye_color: ${person?.eye_color}`}</div>
    <div>{`Birth_year: ${person?.birth_year}`}</div>
    <div>{`Gender: ${person?.gender}`}</div>
    <div>{`Homeworld: ${person?.homeworld}`}</div>
    <InfoBlock links={person?.films} linksName="Film" name="Films" />
    <InfoBlock links={person?.starships} linksName="Starship" name="Starships" />
    <InfoBlock links={person?.vehicles} linksName="Vehicle" name="Vehicles" />
    <InfoBlock links={person?.species} linksName="Race" name="Species" />
  </div>
);

export default PersonItem;
