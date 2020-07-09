import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink exact to="/films">
      Films
    </NavLink>
    <NavLink exact to="/people">
      People
    </NavLink>
    <NavLink exact to="/starships">
      Starships
    </NavLink>
    <NavLink exact to="/vehicles">
      Vehicles
    </NavLink>
    <NavLink exact to="/species">
      Species
    </NavLink>
    <NavLink exact to="/planets">
      Planets
    </NavLink>
  </div>
);

export default Header;
