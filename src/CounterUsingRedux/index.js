// createStore & combinedReducers = redux packages
// createStore makes Redux store and takes in a list of parameters (i.e reducer)
// combineReducers = combined multiple reducers into one
// createStore function creates the store and passes reducer variable as a param


import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../modules/redux/counter';
import { counter, capacityUpdate, reset, chartDataRange, chartDayData, chartWeekData, chartMonthData } from '../modules/redux/counter';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:3050');


socket.on("connect", () => {
    console.log(`Connected to Socket Server. Client Id: ${socket.id}`);
});
//All the socket listeners

socket.on('serverUpdatedCount', (newCount) => {
    console.log('[SERVER] Count:', newCount);
    store.dispatch(capacityUpdate(newCount));
    store.dispatch(reset());
});
socket.on('requestedDataRangeFromServer', (dataRange) => {
    console.log('DataRange: ', dataRange);
    store.dispatch(chartDataRange(dataRange))
});
socket.on('requestedChartDataFromServer', (allData) => {
    console.log('ChartDataFromServer: ', allData);
    store.dispatch(chartDayData(allData.day));
    store.dispatch(chartWeekData(allData.week));
    store.dispatch(chartMonthData(allData.month));
})
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let rootReducers = combineReducers(
    {
        counter: counterReducer
    }
);

const store = applyMiddleware(socketIoMiddleware)(createStore)(rootReducers);
store.subscribe(() => {
    console.log('this is my counter state', store.getState());

});
//console.log('counter Reducer', rootReducers.counterReducer)
// export function updateServer() {
//store.dispatch({type:'server/increment', obj:store.getState().counter.counter});   
//}


export default store;





