import {
  GetPeoples, GetPerson, SetPeople, SetPerson
} from '../../types/actions';
import { Person } from '../../types/entities/entities';

export const GET_PEOPLE = 'GET_PEOPLE';
export const SET_PEOPLE = 'SET_PEOPLE';
export const GET_PERSON = 'GET_PERSON';
export const SET_PERSON = 'SET_PERSON';

export const getPeoples = (): GetPeoples => ({ type: GET_PEOPLE });
export const setPeoples = (people: Array<Person>): SetPeople => ({ type: SET_PEOPLE, people });
export const getPerson = (): GetPerson => ({ type: GET_PERSON });
export const setPerson = (person: Person): SetPerson => ({ type: SET_PERSON, person});
