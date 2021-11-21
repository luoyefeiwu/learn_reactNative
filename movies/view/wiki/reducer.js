import {SET_CATEGORIES} from './actionTypes';
const defaultState = {
  categories: [],
};

export default (state = defaultState, action) => {
  if (action.type === SET_CATEGORIES) {
    return {
      categories: [...action.data],
    };
  }

  return state;
};
