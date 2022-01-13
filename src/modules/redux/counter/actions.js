// IMPLEMENTATION FOR ACTIONS. INCREMENT, DECREMENT & RESET OF THE COUNTER

import { INCREMENT, DECREMENT, RESET, CLOSE, CAPACITYUPDATE, CHARTDATAUPDATE } from './types';



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


// Actions are plain objects that take type and payload as object keys