import {SET_HOTLIST, SET_REFRESHING} from './actionTypes';
export const getSetHostListAction = data => {
  return {
    type: SET_HOTLIST,
    data: data,
  };
};

export const getSetRefreshingAction = data => {
  return {
    type: SET_REFRESHING,
    data: data,
  };
};
