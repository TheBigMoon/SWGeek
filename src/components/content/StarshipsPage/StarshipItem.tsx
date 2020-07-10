import React from 'react';
import { Starship } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import { FlexBox, LinkItem } from '../../../styledComponents/common/common';

interface StarshipProps {
  starship: Starship | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const StarshipItem: React.FC<StarshipProps> = ({ starship, showLink, showInfoBlocks }) => (
  <PageItem>
    {showLink
      ? (
        <LinkItem exact to={`/starships/${starship?.url.replace(/\D/g, '')}`}>
          {starship?.name}
        </LinkItem>
      )
      : (
        <ItemTitle>
          {starship?.name}
        </ItemTitle>
      )}
    <InfoLine>
      <ItemH2>Model:</ItemH2>
      <InfoProp>{starship?.model}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Manufacturer:</ItemH2>
      <InfoProp>{starship?.manufacturer}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Cost in credits:</ItemH2>
      <InfoProp>{starship?.cost_in_credits}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Length:</ItemH2>
      <InfoProp>{starship?.length}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Max atmosphering speed:</ItemH2>
      <InfoProp>{starship?.max_atmosphering_speed}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Crew:</ItemH2>
      <InfoProp>{starship?.crew}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Passengers:</ItemH2>
      <InfoProp>{starship?.passengers}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Cargo capacity:</ItemH2>
      <InfoProp>{starship?.cargo_capacity}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Consumables:</ItemH2>
      <InfoProp>{starship?.consumables}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Hyperdrive rating:</ItemH2>
      <InfoProp>{starship?.hyperdrive_rating}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>MGLT:</ItemH2>
      <InfoProp>{starship?.MGLT}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Starship class:</ItemH2>
      <InfoProp>{starship?.starship_class}</InfoProp>
    </InfoLine>
    {
      showInfoBlocks
        ? (
          <FlexBox>
            <InfoBlock links={starship?.pilots} linksName="Pilot" name="Pilots" />
            <InfoBlock links={starship?.films} linksName="Film" name="Films" />
          </FlexBox>
        )
        : null
    }
  </PageItem>
);

export default StarshipItem;
