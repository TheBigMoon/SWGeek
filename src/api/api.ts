import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const API = {
  async getPeople(page: string) {
    return await instance.get(`people/${page}`)
      .then((response) => response.data);
  },
  async getPerson(personId: number) {
    return await instance.get(`people/${personId}/`)
      .then((response) => response.data);
  },
  async getFilms(page: string) {
    return await instance.get(`films/${page}`)
      .then((response) => response.data);
  },
  async getFilm(filmId: number) {
    return await instance.get(`films/${filmId}/`)
      .then((response) => response.data);
  },
  async getStarships(page: string) {
    return await instance.get(`starships/${page}`)
      .then((response) => response.data);
  },
  async getStarship(starshipId: number) {
    return await instance.get(`starships/${starshipId}/`)
      .then((response) => response.data);
  },
  async getVehicles(page: string) {
    return await instance.get(`vehicles/${page}`)
      .then((response) => response.data);
  },
  async getVehicle(vehicleId: number) {
    return await instance.get(`vehicles/${vehicleId}/`)
      .then((response) => response.data);
  },
  async getSpecies(page: string) {
    return await instance.get(`species/${page}`)
      .then((response) => response.data);
  },
  async getRace(raceId: number) {
    return await instance.get(`species/${raceId}/`)
      .then((response) => response.data);
  },
  async getPlanets(page: string) {
    return await instance.get(`planets/${page}`)
      .then((response) => response.data);
  },
  async getPlanet(planetId: number) {
    return await instance.get(`planets/${planetId}/`)
      .then((response) => response.data);
  }
};

export default API;
