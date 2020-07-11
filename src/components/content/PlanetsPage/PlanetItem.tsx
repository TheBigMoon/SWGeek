import React from 'react';
import { Planet } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import { FlexBox, LinkItem } from '../../../styledComponents/common/common';

interface PlanetProps {
  planet: Planet | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const PlanetItem: React.FC<PlanetProps> = ({ planet, showLink, showInfoBlocks }) => (
  <PageItem>
    {showLink
      ? (
        <LinkItem exact to={`/planets/${planet?.url.replace(/\D/g, '')}`}>
          {planet?.name}
        </LinkItem>
      )
      : (
        <ItemTitle>
          {planet?.name}
        </ItemTitle>
      )}
    <InfoLine>
      <ItemH2>Rotation period:</ItemH2>
      <InfoProp>{planet?.rotation_period}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Orbital period:</ItemH2>
      <InfoProp>{planet?.orbital_period}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Diameter:</ItemH2>
      <InfoProp>{planet?.diameter}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Climate:</ItemH2>
      <InfoProp>{planet?.climate}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Gravity:</ItemH2>
      <InfoProp>{planet?.gravity}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Terrain:</ItemH2>
      <InfoProp>{planet?.terrain}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Surface water:</ItemH2>
      <InfoProp>{planet?.surface_water}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Population:</ItemH2>
      <InfoProp>{planet?.population}</InfoProp>
    </InfoLine>
    {
      showInfoBlocks
        ? (
          <FlexBox column center={false}>
            <InfoBlock links={planet?.residents} linksName="Resident" name="Residents" />
            <InfoBlock links={planet?.films} linksName="Film" name="Films" />
          </FlexBox>
        )
        : null
    }
  </PageItem>
);

export default PlanetItem;
