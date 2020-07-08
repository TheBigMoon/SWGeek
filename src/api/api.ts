import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const API = {
  async getPeople() {
    return await instance.get('people/')
      .then((response) => response);
  },
  async getPerson(personId: number) {
    return await instance.get(`people/${personId}/`)
      .then((response) => response);
  },
  async getFilms() {
    return await instance.get('films/')
      .then((response) => response.data.results);
  },
  async getFilm(filmId: number) {
    return await instance.get(`films/${filmId}/`)
      .then((response) => response);
  },
  async getStarships() {
    return await instance.get('starships')
      .then((response) => response);
  },
  async getStarship(starshipId: number) {
    return await instance.get(`starships/${starshipId}/`)
      .then((response) => response);
  },
  async getVehicles() {
    return await instance.get('vehicles')
      .then((response) => response);
  },
  async getVehicle(vehicleId: number) {
    return await instance.get(`vehicles/${vehicleId}/`)
      .then((response) => response);
  },
  async getSpecies() {
    return await instance.get('species')
      .then((response) => response);
  },
  async getRace(raceId: number) {
    return await instance.get(`species/${raceId}/`)
      .then((response) => response);
  },
  async getPlanets() {
    return await instance.get('planets')
      .then((response) => response);
  },
  async getPlanet(planetId: number) {
    return await instance.get(`planets/${planetId}/`)
      .then((response) => response);
  }
};

export default API;
