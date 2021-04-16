import { combineReducers } from 'redux';
import SortingArray from './reducers/SortingArray';

export default combineReducers({
    Sorting: SortingArray,
});
