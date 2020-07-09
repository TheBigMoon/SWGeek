import { Person } from '../entities/entities';
import {
  GET_PEOPLE, GET_PERSON, SET_PEOPLE, SET_PERSON
} from '../../constants/actionTypeConstants';

export type PeopleActionType = SetPeople | SetPerson

export interface GetPeople {type: typeof GET_PEOPLE, page: string}
export interface SetPeople {
  type: typeof SET_PEOPLE,
  people: Array<Person>,
  prevPage: string | null,
  nextPage: string | null
}
export interface GetPerson {type: typeof GET_PERSON, personId: number}
export interface SetPerson {type: typeof SET_PERSON, person: Person}
