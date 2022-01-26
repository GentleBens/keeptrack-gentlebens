// IMPLEMENTATION FOR ACTIONS. INCREMENT, DECREMENT & RESET OF THE COUNTER

import { INCREMENT, DECREMENT, RESET, CLOSE, CAPACITYUPDATE, CHARTDATAUPDATE, CHARTDAYDATA, CHARTWEEKDATA, CHARTMONTHDATA } from './types';



export const increment = () => ({
    type: INCREMENT
});
export const decrement = () => ({
    type: DECREMENT
});
export const reset = () => ({
    type: RESET
});
export const close = () => ({
    type: CLOSE
});
export const capacityUpdate = (num) => ({
    type: CAPACITYUPDATE,
    payload: num
});
export const chartDataRange = (dataRange) => ({
    type: CHARTDATAUPDATE,
    payload: dataRange
});
export const chartDayData = (dateRange) => ({
    type: CHARTDAYDATA,
    payload: dateRange
});
export const chartWeekData = (dateRange) => ({
    type: CHARTWEEKDATA,
    payload: dateRange
});
export const chartMonthData = (dateRange) => ({
    type: CHARTMONTHDATA,
    payload: dateRange
});




// Actions are plain objects that take type and payload as object keys