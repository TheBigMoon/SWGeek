import React from 'react';
import { Vehicle } from '../../../types/entities/entities';
import InfoBlock from '../common/InfoBlock';
import {
  InfoLine, InfoProp, ItemH2, ItemTitle, PageItem
} from '../../../styledComponents/PageItem';
import { FlexBox, LinkItem } from '../../../styledComponents/common/common';

interface VehicleProps {
  vehicle: Vehicle | null,
  showLink: boolean,
  showInfoBlocks: boolean
}

const VehicleItem: React.FC<VehicleProps> = ({ vehicle, showLink, showInfoBlocks }) => (
  <PageItem>
    {showLink
      ? (
        <LinkItem exact to={`/vehicles/${vehicle?.url.replace(/\D/g, '')}`}>
          {vehicle?.name}
        </LinkItem>
      )
      : (
        <ItemTitle>
          {vehicle?.name}
        </ItemTitle>
      )}
    <InfoLine>
      <ItemH2>Model:</ItemH2>
      <InfoProp>{vehicle?.model}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Manufacturer:</ItemH2>
      <InfoProp>{vehicle?.manufacturer}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Cost in credits:</ItemH2>
      <InfoProp>{vehicle?.cost_in_credits}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Length:</ItemH2>
      <InfoProp>{vehicle?.length}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Max atmosphering speed:</ItemH2>
      <InfoProp>{vehicle?.max_atmosphering_speed}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Crew:</ItemH2>
      <InfoProp>{vehicle?.crew}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Passengers:</ItemH2>
      <InfoProp>{vehicle?.passengers}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Cargo capacity:</ItemH2>
      <InfoProp>{vehicle?.cargo_capacity}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Consumables:</ItemH2>
      <InfoProp>{vehicle?.consumables}</InfoProp>
    </InfoLine>
    <InfoLine>
      <ItemH2>Hyperdrive rating:</ItemH2>
      <InfoProp>{vehicle?.vehicle_class}</InfoProp>
    </InfoLine>
    {
      showInfoBlocks
        ? (
          <FlexBox>
            <InfoBlock links={vehicle?.pilots} linksName="Pilot" name="Pilots" />
            <InfoBlock links={vehicle?.films} linksName="Film" name="Films" />
          </FlexBox>
        )
        : null
    }
  </PageItem>
);

export default VehicleItem;
