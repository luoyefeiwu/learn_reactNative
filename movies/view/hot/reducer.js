import {SET_HOTLIST, SET_REFRESHING} from './actionTypes';
const defaultState = {
  list: [],
  refreshing: false,
};

export default (state = defaultState, action) => {
  if (action.type === SET_HOTLIST) {
    return {
      list: [...state.list, ...action.data],
      refreshing: false,
    };
  }
  if (action.type === SET_REFRESHING) {
    return {
      refreshing: action.data,
    };
  }
  return state;
};
