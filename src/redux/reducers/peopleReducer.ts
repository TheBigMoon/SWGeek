import { PeopleStore } from '../../types/store/store';
import { PeopleActionType } from '../../types/actions';
import { SET_PEOPLE, SET_PERSON } from '../actions/actions';

const initialState: PeopleStore = {
  people: null,
  person: null
};

const peopleReducer = (state = initialState, action: PeopleActionType): PeopleStore => {
  switch (action.type) {
    case SET_PEOPLE: {
      return {
        ...state,
        people: [...action.people]
      };
    }
    case SET_PERSON: {
      return {
        ...state,
        person: { ...action.person }
      };
    }
    default: return state;
  }
};

export default peopleReducer;
