import { UPDATE_FILTER } from './actionTypes';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});


/** Same as above code
 * return action 
 */
export const updateFilters_arif = filters => {
  return {
    type: UPDATE_FILTER,
    payload: filters
  }
}