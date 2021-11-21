import {combineReducers} from 'redux';
import {reducer as wiki} from '../view/wiki';

const reducer = combineReducers({
  wiki,
});

export default reducer;
