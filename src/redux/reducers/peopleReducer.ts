import { PeopleStore } from '../../types/store/store';
import { PeopleActionType } from '../../types/actions/peopleActionsTypes';
import {
  SET_PEOPLE, SET_PERSON, SORT_PEOPLE_BY_A_Z, SORT_PEOPLE_BY_Z_A
} from '../../constants/actionTypeConstants';
import { sortHelper } from './reducerHelpers/sortHelper';

const initialState: PeopleStore = {
  people: null,
  person: null,
  prevPage: null,
  nextPage: null,
  sortByAZ: false,
  sortByZA: false
};

const peopleReducer = (state = initialState, action: PeopleActionType): PeopleStore => {
  switch (action.type) {
    case SET_PEOPLE: {
      const people = sortHelper(state.sortByAZ, state.sortByZA, action.people);
      return {
        ...state,
        people,
        prevPage: action.prevPage,
        nextPage: action.nextPage
      };
    }
    case SET_PERSON: {
      return {
        ...state,
        person: { ...action.person }
      };
    }
    case SORT_PEOPLE_BY_A_Z: {
      const people = state.people || [];
      const sortedPeople = sortHelper(state.sortByAZ, state.sortByZA, people);
      return {
        ...state,
        people: [...sortedPeople],
        sortByAZ: action.sortByAZ,
        sortByZA: false
      };
    }
    case SORT_PEOPLE_BY_Z_A: {
      const people = state.people || [];
      const sortedPeople = sortHelper(state.sortByAZ, state.sortByZA, people);
      return {
        ...state,
        people: [...sortedPeople],
        sortByAZ: false,
        sortByZA: action.sortByZA
      };
    }
    default: return state;
  }
};

export default peopleReducer;
