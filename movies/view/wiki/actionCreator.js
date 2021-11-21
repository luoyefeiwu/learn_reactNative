import {SET_CATEGORIES} from './actionTypes';
export const getSetCategoriesAction = data => {
  return {
    type: SET_CATEGORIES,
    data: data,
  };
};
