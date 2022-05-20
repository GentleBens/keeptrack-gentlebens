import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../modules/redux/counter';
import { capacityUpdate, reset, chartDataRange, chartDayData, chartWeekData, chartMonthData } from '../modules/redux/counter';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('https://keeptrack-gentlebens.herokuapp.com/');

socket.on("connect", () => {
    console.log(`Connected to Socket Server. Client Id: ${socket.id}`);
});

// All the socket listeners
socket.on('serverUpdatedCount', (newCount) => {
    store.dispatch(capacityUpdate(newCount));
    store.dispatch(reset());
});
socket.on('requestedDataRangeFromServer', (dataRange) => {
    store.dispatch(chartDataRange(dataRange))
});
socket.on('requestedChartDataFromServer', (allData) => {
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


export default store;




