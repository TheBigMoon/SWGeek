import React from 'react';
import { Film } from '../../../types/entities/entities';

interface FilmProps {
  film: Film | null
}

const FilmItem: React.FC<FilmProps> = ({ film }) => {
  const characters = film?.characters.map((character) => <div>{character}</div>);
  const planets = film?.planets.map((planet) => <div>{planet}</div>);
  const starships = film?.starships.map((starship) => <div>{starship}</div>);
  const vehicles = film?.vehicles.map((vehicle) => <div>{vehicle}</div>);
  const species = film?.species.map((race) => <div>{race}</div>);

  return (
    <div>
      <div>{film?.title}</div>
      <div>
        Episode —
        {film?.episode_id}
      </div>
      <div>
        Opening Text
        <div>
          {film?.opening_crawl}
        </div>
      </div>
      <div>
        {`Director: ${film?.director}`}
      </div>
      <div>
        {`Producers: ${film?.producer}`}
      </div>
      <div>
        {`Release date: ${film?.release_date}`}
      </div>
      <div>
        <p>Characters:</p>
        {characters}
      </div>
      <div>
        <p>Planets:</p>
        {planets}
      </div>
      <div>
        <p>Starships:</p>
        {starships}
      </div>
      <div>
        <p>Vehicles:</p>
        {vehicles}
      </div>
      <div>
        <p>Species:</p>
        {species}
      </div>
    </div>
  );
};

export default FilmItem;
