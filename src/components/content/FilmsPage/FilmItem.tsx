import React from 'react';
import { Film } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';

interface FilmProps {
  film: Film | null
}

const FilmItem: React.FC<FilmProps> = ({ film }) => {
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
      <InfoBlock links={film?.characters} linksName="People" name="Characters" />
      <InfoBlock links={film?.planets} linksName="Planet" name="Planets" />
      <InfoBlock links={film?.starships} linksName="Starship" name="Starships" />
      <InfoBlock links={film?.vehicles} linksName="Vehicle" name="Vehicles" />
      <InfoBlock links={film?.planets} linksName="Race" name="Species" />
    </div>
  );
};

export default FilmItem;
