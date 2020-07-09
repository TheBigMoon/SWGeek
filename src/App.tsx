import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import FilmsContainer from './components/content/FilmsPage/FilmsContainer';
import FilmContainer from "./components/content/FilmsPage/FilmContainer";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/films" render={() => <FilmsContainer />} />
      <Route exact path="/films/:filmId" render={() => <FilmContainer />} />
      <Route exact path="/people">
        People
      </Route>
      <Route exact path="/starships">
        Starships
      </Route>
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
