import {
  GET_PEOPLE, GET_PERSON, SET_PEOPLE, SET_PERSON
} from '../../redux/actions/actions';
import { Person } from '../entities/entities';

export type PeopleActionType = SetPeople | SetPerson

export interface GetPeoples {type: typeof GET_PEOPLE}
export interface SetPeople {type: typeof SET_PEOPLE, people: Array<Person>}
export interface GetPerson {type: typeof GET_PERSON, personId: number}
export interface SetPerson {type: typeof SET_PERSON, person: Person}
