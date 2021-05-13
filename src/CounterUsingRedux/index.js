// createStore & combinedReducers = redux packages
// createStore makes Redux store and takes in a list of parameters (i.e reducer)
// combineReducers = combined multiple reducers into one
// createStore function creates the store and passes reducer variable as a param


import { createStore, combineReducers } from 'redux';
import counterReducer from '../modules/redux/counter';

let rootReducers = combineReducers(
    { counter: counterReducer } 
);
const store = createStore(rootReducers);

export default store;

