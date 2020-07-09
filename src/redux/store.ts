import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaWatcher from '../sagas/sagas';
import peopleReducer from './reducers/peopleReducer';
import filmsReducer from './reducers/filmsReducer';
import starshipsReducer from './reducers/starshipsReducer';
import vehiclesReducer from './reducers/vehiclesReducer';
import speciesReducer from './reducers/speciesReducer';
import planetsReducer from './reducers/planetsReducer';

const reducers = combineReducers({
  peoplePage: peopleReducer,
  filmsPage: filmsReducer,
  starshipsPage: starshipsReducer,
  vehiclesPage: vehiclesReducer,
  speciesPage: speciesReducer,
  planetsPage: planetsReducer,
});

// Укоротить
export type App = ReturnType<typeof reducers>

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaWatcher);
