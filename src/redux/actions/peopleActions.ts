import {
  GetPeople,
  GetPerson,
  SetPeople,
  SetPerson,
  SortPeopleByAZ,
  SortPeopleByZA
} from '../../types/actions/peopleActionsTypes';
import {
  GET_PEOPLE,
  GET_PERSON,
  SET_PEOPLE, SET_PERSON,
  SORT_PEOPLE_BY_A_Z,
  SORT_PEOPLE_BY_Z_A
} from '../../constants/actionTypeConstants';
import { Person } from '../../types/entities/entities';

export const getPeople = (page: string): GetPeople => ({ type: GET_PEOPLE, page });
export const setPeople = (
  people: Array<Person>, prevPage: string | null, nextPage: string | null
): SetPeople => ({
  type: SET_PEOPLE, people, prevPage, nextPage
});
export const sortPeopleByAZ = (sortByAZ: boolean): SortPeopleByAZ => (
  { type: SORT_PEOPLE_BY_A_Z, sortByAZ }
);
export const sortPeopleByZA = (sortByZA: boolean): SortPeopleByZA => (
  { type: SORT_PEOPLE_BY_Z_A, sortByZA }
);
export const getPerson = (personId: number): GetPerson => ({ type: GET_PERSON, personId });
export const setPerson = (person: Person): SetPerson => ({ type: SET_PERSON, person });
