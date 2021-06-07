// createStore & combinedReducers = redux packages
// createStore makes Redux store and takes in a list of parameters (i.e reducer)
// combineReducers = combined multiple reducers into one
// createStore function creates the store and passes reducer variable as a param


import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../modules/redux/counter';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "/server");


let rootReducers = combineReducers(
    { counter: counterReducer } 
    
);

const store = applyMiddleware(socketIoMiddleware)(createStore)(rootReducers);
store.subscribe(()=> {
    console.log('new client state', store.getState());
});
store.dispatch({type:'server/hello', data:'Hello!'});

export default store;

