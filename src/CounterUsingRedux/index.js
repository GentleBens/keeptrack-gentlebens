// createStore & combinedReducers = redux packages
// createStore makes Redux store and takes in a list of parameters (i.e reducer)
// combineReducers = combined multiple reducers into one
// createStore function creates the store and passes reducer variable as a param


import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../modules/redux/counter';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3050');
socket.on("connect", () => {
    console.log(`Cliend ID: ${socket.id}`); // ojIckSD2jqNzOqIrAGzL
    socket.on("sendClientInfo",() => {  
        let infoData = {ID: socket.id, NAME: 'Client'};
        console.log('Client: Sending ClientInfo: ' + infoData);  
        socket.emit('userinfo', infoData);
    });
    socket.on('SyncTotalCounter', (data) =>{
        let totalCount = data.totalCount;
        console.log('Client: Recieved SyncTotalCounter.  Total Count: ' + totalCount);
    })
  
});
  
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let rootReducers = combineReducers(
    { counter: counterReducer }
    );
    
const store = applyMiddleware(socketIoMiddleware)(createStore)(rootReducers);
store.subscribe(()=> {
    console.log('this is my counter state', store.getState());
    
});
//console.log('counter Reducer', rootReducers.counterReducer)
// export function updateServer() {
 //store.dispatch({type:'server/increment', obj:store.getState().counter.counter});   
//}


export default store;





