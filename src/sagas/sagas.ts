import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_FILM,
  GET_FILMS,
  GET_PEOPLE,
  GET_PERSON, GET_PLANET, GET_PLANETS, GET_RACE, GET_SPECIES,
  GET_STARSHIP,
  GET_STARSHIPS, GET_VEHICLE, GET_VEHICLES
} from '../constants/actionTypeConstants';
import { GetPeople, GetPerson } from '../types/actions/peopleActionsTypes';
import API from '../api/api';
import { GetFilm, GetFilms } from '../types/actions/filmsActionsTypes';
import { GetStarship, GetStarships } from '../types/actions/starshipsActionsTypes';
import { GetVehicle, GetVehicles } from '../types/actions/vehiclesActionTypes';
import { GetRace, GetSpecies } from '../types/actions/speciesActionTypes';
import { GetPlanet, GetPlanets } from '../types/actions/planetsActionTypes';
import { setPlanet, setPlanets } from '../redux/actions/planetsActions';
import { setStarship, setStarships } from '../redux/actions/starshipsActions';
import { setFilm, setFilms } from '../redux/actions/filmsActions';
import { setPeople, setPerson } from '../redux/actions/peopleActions';
import { setVehicle, setVehicles } from '../redux/actions/vehiclesActions';
import { setRace, setSpecies } from '../redux/actions/speciesActions';

function* getPeopleWorker(action: GetPeople) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getPeople, page);
  yield put(setPeople(results, previous, next));
}

function* getPersonWorker(action: GetPerson) {
  const { personId } = action;
  const person = yield call(API.getPerson, personId);
  yield put(setPerson(person));
}

function* getFilmsWorker(action: GetFilms) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getFilms, page);
  yield put(setFilms(results, previous, next));
}

function* getFilmWorker(action: GetFilm) {
  const { filmId } = action;
  const film = yield call(API.getFilm, filmId);
  yield put(setFilm(film));
}

function* getStarshipsWorker(action: GetStarships) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getStarships, page);
  yield put(setStarships(results, previous, next));
}

function* getStarshipWorker(action: GetStarship) {
  const { starshipId } = action;
  const starship = yield call(API.getStarship, starshipId);
  yield put(setStarship(starship));
}

function* getVehiclesWorker(action: GetVehicles) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getVehicles, page);
  yield put(setVehicles(results, previous, next));
}

function* getVehicleWorker(action: GetVehicle) {
  const { vehicleId } = action;
  const vehicle = yield call(API.getVehicle, vehicleId);
  yield put(setVehicle(vehicle));
}

function* getSpeciesWorker(action: GetSpecies) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getSpecies, page);
  yield put(setSpecies(results, previous, next));
}

function* getRaceWorker(action: GetRace) {
  const { raceId } = action;
  const race = yield call(API.getRace, raceId);
  yield put(setRace(race));
}

function* getPlanetsWorker(action: GetPlanets) {
  const { page } = action;
  const { results, previous, next } = yield call(API.getPlanets, page);
  yield put(setPlanets(results, previous, next));
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
