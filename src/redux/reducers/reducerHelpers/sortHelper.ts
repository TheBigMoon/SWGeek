import {
  Film, Person, Planet, Race, Starship, Vehicle
} from '../../../types/entities/entities';

export function filmSorter(sortByAZ: boolean, sortByZA: boolean, items: Array<Film>) {
  return sortByAZ
    ? [...items].sort((filmA, filmB) => (
      filmA.title.toLowerCase() < filmB.title.toLowerCase() ? -1 : 1))
    : sortByZA ? [...items].sort((filmA, filmB) => (
      filmA.title.toLowerCase() < filmB.title.toLowerCase() ? 1 : -1))
      : [...items];
}

type ItemType = Person | Race | Planet | Starship | Vehicle

export function sortHelpers(sortByAZ: boolean, sortByZA: boolean, items: Array<ItemType>) {
  return sortByAZ
    ? [...items].sort((itemA, itemB) => (
      itemA.name.toLowerCase() < itemB.name.toLowerCase() ? -1 : 1))
    : sortByZA ? [...items].sort((itemA, itemB) => (
      itemA.name.toLowerCase() < itemB.name.toLowerCase() ? 1 : -1))
      : [...items];
}
