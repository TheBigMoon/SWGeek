import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import FilmsContainer from './components/content/FilmsPage/FilmsContainer';
import FilmContainer from './components/content/FilmsPage/FilmContainer';
import PeopleContainer from './components/content/PeoplePage/PeopleContainer';
import PersonContainer from './components/content/PeoplePage/PersonContainer';
import StarshipsContainer from './components/content/StarshipsPage/StarshipsContainer';
import StarshipContainer from './components/content/StarshipsPage/StarshipContainer';
import VehiclesContainer from './components/content/VehiclesPage/VehiclesContainer';
import VehicleContainer from './components/content/VehiclesPage/VehicleContainer';
import SpeciesContainer from './components/content/SpeciesPage/SpeciesContainer';
import RaceContainer from './components/content/SpeciesPage/RaceContainer';
import PlanetsContainer from './components/content/PlanetsPage/PlanetsContainer';
import PlanetContainer from './components/content/PlanetsPage/PlanetContainer';
import { Content } from './styledComponents/common/common';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Route exact path="/films" render={() => <FilmsContainer />} />
        <Route exact path="/films/:filmId" render={() => <FilmContainer />} />
        <Route exact path="/people" render={() => <PeopleContainer />} />
        <Route exact path="/people/:personId" render={() => <PersonContainer />} />
        <Route exact path="/starships" render={() => <StarshipsContainer />} />
        <Route exact path="/starships/:starshipId" render={() => <StarshipContainer />} />
        <Route exact path="/vehicles" render={() => <VehiclesContainer />} />
        <Route exact path="/vehicles/:vehicleId" render={() => <VehicleContainer />} />
        <Route exact path="/species" render={() => <SpeciesContainer />} />
        <Route exact path="/species/:raceId" render={() => <RaceContainer />} />
        <Route exact path="/planets" render={() => <PlanetsContainer />} />
        <Route exact path="/planets/:planetId" render={() => <PlanetContainer />} />
      </Content>
    </>
  );
}

export default App;
