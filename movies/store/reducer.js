import {combineReducers} from 'redux';
import {reducer as wiki} from '../view/wiki';
import {reducer as hot} from '../view/hot';

const reducer = combineReducers({
  wiki,
  hot,
});

export default reducer;
