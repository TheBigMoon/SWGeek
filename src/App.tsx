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

function App() {
  return (
    <>
      <Header />
      <Route exact path="/films" render={() => <FilmsContainer />} />
      <Route exact path="/films/:filmId" render={() => <FilmContainer />} />
      <Route exact path="/people" render={() => <PeopleContainer />} />
      <Route exact path="/people/:personId" render={() => <PersonContainer />} />
      <Route exact path="/starships" render={() => <StarshipsContainer />} />
      <Route exact path="/starships/:starshipId" render={() => <StarshipContainer />} />
      <Route exact path="/vehicles">
        Vehicles
      </Route>
      <Route exact path="/species">
        Species
      </Route>
      <Route exact path="/planets">
        Planets
      </Route>
    </>
  );
}

export default App;
