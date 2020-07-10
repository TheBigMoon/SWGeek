import React from 'react';
import { NavLink } from 'react-router-dom';
import { Person } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import { FlexBox, LinkItem } from '../../../styledComponents/common/common';

interface PersonProps {
  person: Person | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const PersonItem: React.FC<PersonProps> = ({ person, showLink, showInfoBlocks }) => {
  const homeworldPage = person?.homeworld.replace('http://swapi.dev/api', '') || '/peoples';
  return (
    <PageItem>
      <div>
        {showLink
          ? (
            <LinkItem exact to={`/people/${person?.url.replace(/\D/g, '')}`}>
              {person?.name}
            </LinkItem>
          )
          : (
            <ItemTitle>
              {person?.name}
            </ItemTitle>
          )}
      </div>
      <InfoLine>
        <ItemH2>Height:</ItemH2>
        <InfoProp>{person?.height}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Mass:</ItemH2>
        <InfoProp>{person?.mass}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Hair color:</ItemH2>
        <InfoProp>{person?.hair_color}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Skin color:</ItemH2>
        <InfoProp>{person?.skin_color}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Eye color:</ItemH2>
        <InfoProp>{person?.eye_color}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Birth year:</ItemH2>
        <InfoProp>{person?.birth_year}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Gender:</ItemH2>
        <InfoProp>{person?.gender}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Homeworld:</ItemH2>
        <InfoProp>
          <NavLink to={homeworldPage}>
            Planet
          </NavLink>
        </InfoProp>
      </InfoLine>
      {
        showInfoBlocks
          ? (
            <FlexBox>
              <InfoBlock links={person?.films} linksName="Film" name="Films" />
              <InfoBlock links={person?.starships} linksName="Starship" name="Starships" />
              <InfoBlock links={person?.vehicles} linksName="Vehicle" name="Vehicles" />
              <InfoBlock links={person?.species} linksName="Race" name="Species" />
            </FlexBox>
          )
          : null
      }
    </PageItem>
  );
};

export default PersonItem;
