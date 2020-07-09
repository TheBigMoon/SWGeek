import React from 'react';
import { Race } from '../../../types/entities/entities';

interface RaceProps {
  race: Race | null
}

const RaceItem: React.FC<RaceProps> = ({ race }) => {
  const people = race?.people.map((person) => <div>{person}</div>);
  const films = race?.films.map((film) => <div>{film}</div>);
  return (
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
      <div>
        <p>People:</p>
        <div>
          {people}
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

export default RaceItem;
