import React from 'react';
import StyledHeader from '../styledComponents/Header';
import { LinkItem } from '../styledComponents/common/common';

const Header = () => (
  <StyledHeader>
    <LinkItem exact to="/">
      Films
    </LinkItem>
    <LinkItem exact to="/people">
      People
    </LinkItem>
    <LinkItem exact to="/starships">
      Starships
    </LinkItem>
    <LinkItem exact to="/vehicles">
      Vehicles
    </LinkItem>
    <LinkItem exact to="/species">
      Species
    </LinkItem>
    <LinkItem exact to="/planets">
      Planets
    </LinkItem>
  </StyledHeader>
);

export default Header;
