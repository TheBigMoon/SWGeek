import React from 'react';
import { Person } from '../../../types/entities/entities';

interface PersonProps {
  person: Person | null
}

const PersonItem: React.FC<PersonProps> = ({ person }) => {
  const films = person?.films.map((film) => <div>{film}</div>);
  const starships = person?.starships.map((starship) => <div>{starship}</div>);
  const vehicles = person?.vehicles.map((vehicle) => <div>{vehicle}</div>);
  const species = person?.species.map((race) => <div>{race}</div>);

  return (
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
      <div>
        <p>Films</p>
        <div>
          {films}
        </div>
      </div>
      <div>
        <p>Starships:</p>
        <div>
          {starships}
        </div>
      </div>
      <div>
        <p>Vehicles:</p>
        <div>
          {vehicles}
        </div>
      </div>
      <div>
        <p>Species:</p>
        <div>
          {species}
        </div>
      </div>
    </div>
  );
};

export default PersonItem;
