import { Person } from '../entities/entities';
import {
  GET_PEOPLE,
  GET_PERSON,
  SET_PEOPLE,
  SET_PERSON,
  SORT_PEOPLE_BY_A_Z,
  SORT_PEOPLE_BY_Z_A
} from '../../constants/actionTypeConstants';

export type PeopleActionType = SetPeople | SetPerson | SortPeopleByAZ | SortPeopleByZA

export interface GetPeople {type: typeof GET_PEOPLE, page: string}
export interface SetPeople {
  type: typeof SET_PEOPLE,
  people: Array<Person>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetPerson {type: typeof GET_PERSON, personId: number}
export interface SetPerson {type: typeof SET_PERSON, person: Person}
export interface SortPeopleByAZ {type: typeof SORT_PEOPLE_BY_A_Z, sortByAZ: boolean}
export interface SortPeopleByZA {type: typeof SORT_PEOPLE_BY_Z_A, sortByZA: boolean}
