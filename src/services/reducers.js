import { combineReducers } from 'redux';
import filtersReducer from './filters/reducer';


export default combineReducers({
  filters: filtersReducer
});
