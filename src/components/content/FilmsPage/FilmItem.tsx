import React from 'react';
import { Film } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import { FlexBox, LinkItem } from '../../../styledComponents/common/common';

interface FilmProps {
  film: Film | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const FilmItem: React.FC<FilmProps> = ({ film, showLink, showInfoBlocks }) => (
  <PageItem>
    {showLink
      ? (
        <LinkItem exact to={`/films/${film?.url.replace(/\D/g, '')}`}>
          {film?.title}
        </LinkItem>
      )
      : (
        <ItemTitle>
          {film?.title}
        </ItemTitle>
      )}
    <ItemH2>
      {`Episode ${film?.episode_id}`}
    </ItemH2>
    <div>
      <ItemH2>
        Opening Text:
      </ItemH2>
      {film?.opening_crawl}
    </div>
    <InfoLine>
      <ItemH2>
        Director:
      </ItemH2>
      <InfoProp>
        {film?.director}
      </InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>
        Producers:
      </ItemH2>
      <InfoProp>
        {film?.producer}
      </InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>
        Release date:
      </ItemH2>
      <InfoProp>
        {film?.release_date}
      </InfoProp>
    </InfoLine>
    {
      showInfoBlocks
        ? (
          <FlexBox column center={false}>
            <InfoBlock links={film?.characters} linksName="Person" name="Characters" />
            <InfoBlock links={film?.planets} linksName="Planet" name="Planets" />
            <InfoBlock links={film?.starships} linksName="Starship" name="Starships" />
            <InfoBlock links={film?.vehicles} linksName="Vehicle" name="Vehicles" />
            <InfoBlock links={film?.planets} linksName="Race" name="Species" />
          </FlexBox>
        )
        : null
    }
  </PageItem>
);

export default FilmItem;
