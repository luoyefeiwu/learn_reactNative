import {SET_HOTLIST, SET_REFRESHING} from './actionTypes';
export const getSetHostListAction = data => {
  return {
    type: SET_HOTLIST,
    data: data,
    refreshing: true,
  };
};

export const getSetRefreshingAction = data => {
  return {
    type: SET_REFRESHING,
    data: data,
  };
};
