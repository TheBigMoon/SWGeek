import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_FILM,
  GET_FILMS,
  GET_PEOPLE,
  GET_PERSON, GET_PLANET, GET_PLANETS, GET_RACE, GET_SPECIES,
  GET_STARSHIP,
  GET_STARSHIPS, GET_VEHICLE, GET_VEHICLES
} from '../constants/actionTypeConstants';
import { GetPerson } from '../types/actions/peopleActionsTypes';
import API from '../api/api';
import {
  setFilm,
  setFilms,
  setPeople,
  setPerson, setPlanet,
  setPlanets,
  setRace,
  setSpecies,
  setStarship,
  setStarships,
  setVehicle,
  setVehicles
} from '../redux/actions/actions';
import { GetFilm } from '../types/actions/filmsActionsTypes';
import { GetStarship } from '../types/actions/starshipsActionsTypes';
import { GetVehicle } from '../types/actions/vehiclesActionTypes';
import { GetRace } from '../types/actions/speciesActionTypes';
import { GetPlanet } from '../types/actions/planetsActionTypes';

function* getPeopleWorker() {
  const people = yield call(API.getPeople);
  yield put(setPeople(people));
}

function* getPersonWorker(action: GetPerson) {
  const { personId } = action;
  const person = yield call(API.getPerson, personId);
  yield put(setPerson(person));
}

function* getFilmsWorker() {
  const films = yield call(API.getFilms);
  yield put(setFilms(films));
}

function* getFilmWorker(action: GetFilm) {
  const { filmId } = action;
  const film = yield call(API.getFilm, filmId);
  yield put(setFilm(film));
}

function* getStarshipsWorker() {
  const starships = yield call(API.getStarships);
  yield put(setStarships(starships));
}

function* getStarshipWorker(action: GetStarship) {
  const { starshipId } = action;
  const starship = yield call(API.getStarship, starshipId);
  yield put(setStarship(starship));
}

function* getVehiclesWorker() {
  const vehicles = yield call(API.getVehicles);
  yield put(setVehicles(vehicles));
}

function* getVehicleWorker(action: GetVehicle) {
  const { vehicleId } = action;
  const vehicle = yield call(API.getVehicle, vehicleId);
  yield put(setVehicle(vehicle));
}

function* getSpeciesWorker() {
  const species = yield call(API.getSpecies);
  yield put(setSpecies(species));
}

function* getRaceWorker(action: GetRace) {
  const { raceId } = action;
  const race = yield call(API.getRace, raceId);
  yield put(setRace(race));
}

function* getPlanetsWorker() {
  const planets = yield call(API.getPlanets);
  yield put(setPlanets(planets));
}

function* getPlanetWorker(action: GetPlanet) {
  const { planetId } = action;
  const planet = yield call(API.getPlanet, planetId);
  yield put(setPlanet(planet));
}

function* sagaWatcher() {
  yield takeLatest(GET_PEOPLE, getPeopleWorker);
  yield takeLatest(GET_PERSON, getPersonWorker);
  yield takeLatest(GET_FILMS, getFilmsWorker);
  yield takeLatest(GET_FILM, getFilmWorker);
  yield takeLatest(GET_STARSHIPS, getStarshipsWorker);
  yield takeLatest(GET_STARSHIP, getStarshipWorker);
  yield takeLatest(GET_VEHICLES, getVehiclesWorker);
  yield takeLatest(GET_VEHICLE, getVehicleWorker);
  yield takeLatest(GET_SPECIES, getSpeciesWorker);
  yield takeLatest(GET_RACE, getRaceWorker);
  yield takeLatest(GET_PLANETS, getPlanetsWorker);
  yield takeLatest(GET_PLANET, getPlanetWorker);
}

export default sagaWatcher;
