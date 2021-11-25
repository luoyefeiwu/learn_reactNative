import {SET_CATEGORIES} from './actionTypes';
export const getSetCategoriesAction = data => {
  return {
    type: SET_CATEGORIES,
    data: data,
  };
};

export const getWikiInfo = () => {
  return dispath => {
    let categories = [];
    for (let i = 0; i < 10; i++) {
      categories.push({id: i, title: '小米手环' + i});
    }
    const action = getSetCategoriesAction(categories);
    dispath(action);
  };
};
