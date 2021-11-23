import {SET_HOTLIST, SET_REFRESHING} from './actionTypes';
const defaultState = {
  hostList: [],
  refreshing: false,
};

export default (state = defaultState, action) => {
  if (action.type === SET_HOTLIST) {
    return {
      hostList: [...action.data],
    };
  }
  if (action.type === SET_REFRESHING) {
    return {
      refreshing: [...action.data],
    };
  }
  return state;
};
