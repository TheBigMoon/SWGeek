import React from 'react';
import { NavLink } from 'react-router-dom';
import { Race } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import {FlexBox, LinkItem} from '../../../styledComponents/common/common';

interface RaceProps {
  race: Race | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const RaceItem: React.FC<RaceProps> = ({ race, showInfoBlocks, showLink }) => {
  const homeworld = race?.homeworld === null || undefined ? '/species'
    : race?.homeworld.replace('http://swapi.dev/api', '');
  return (
    <PageItem>
      {showLink
        ? (
          <LinkItem exact to={`/species/${race?.url.replace(/\D/g, '')}`}>
            {race?.name}
          </LinkItem>
        )
        : (
          <ItemTitle>
            {race?.name}
          </ItemTitle>
        )}
      <InfoLine>
        <ItemH2>Classification:</ItemH2>
        <InfoProp>{race?.classification}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Designation:</ItemH2>
        <InfoProp>{race?.designation}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Average height:</ItemH2>
        <InfoProp>{race?.average_height}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Skin colors:</ItemH2>
        <InfoProp>{race?.skin_colors}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Hair colors:</ItemH2>
        <InfoProp>{race?.hair_colors}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Eye colors:</ItemH2>
        <InfoProp>{race?.eye_colors}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Average lifespan:</ItemH2>
        <InfoProp>{race?.average_lifespan}</InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Homeworld:</ItemH2>
        <InfoProp>
          {
            homeworld !== '/species'
              ? (
                <NavLink to={homeworld?.replace('http://swapi.dev/api', '') || '/species'}>
                  Planet
                </NavLink>
              )
              : <div>Unknown</div>
          }
        </InfoProp>
      </InfoLine>
      <InfoLine>
        <ItemH2>Language:</ItemH2>
        <InfoProp>{race?.language}</InfoProp>
      </InfoLine>
      {
        showInfoBlocks
          ? (
            <FlexBox>
              <InfoBlock links={race?.people} linksName="Race" name="People" />
              <InfoBlock links={race?.films} linksName="Film" name="Films" />
            </FlexBox>
          )
          : null
      }
    </PageItem>
  );
};

export default RaceItem;
