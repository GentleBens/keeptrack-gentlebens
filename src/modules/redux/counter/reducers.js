// CONTAINING STATE FOR COUNTER REDUCER AND PURE FUNCTIONS RESPONSIBLE FOR UPDATING STATE FOR THE COUNTER IN REDUX

import { INCREMENT, DECREMENT, RESET, CLOSE, CAPACITYUPDATE } from './types';

const initialState = {
    counter: 0,
    capacity: 10
};
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET:
            return {
                ...state,
                counter: state.counter = 0
            }
        case CLOSE:
            return {
                ...state,
                counter: state.counter
            }
        case CAPACITYUPDATE:
            return {
                ...state,
                capacity: payload
            }
        default:
            return state;
    }
};

// note: 
    // reducers are pure functions
