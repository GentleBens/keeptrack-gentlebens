// CONTAINING STATE FOR COUNTER REDUCER AND PURE FUNCTIONS RESPONSIBLE FOR UPDATING STATE FOR THE COUNTER IN REDUX
import { INCREMENT, DECREMENT } from './types';
// counter starts at 0
const initialState = {
   counter: 0
};
export default (state=initialState, action) => {
    // let { type, payload } = action;
    switch (action.type) {
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
                default:
                    return state;
    }
};

// note: 
    // reducers are pure functions
 