// CONTAINING STATE FOR COUNTER REDUCER AND PURE FUNCTIONS RESPONSIBLE FOR UPDATING STATE FOR THE COUNTER IN REDUX
import { ActionSheetIOS } from 'react-native';
import { INCREMENT, DECREMENT, RESET, CLOSE, MESSAGE} from './types';

const initialState = {
   counter: 0
};
export default (state=initialState, action) => {
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
                case MESSAGE:
                    return Object.assign({}, {message: action.data});

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
                default:
                    return state;
    }
};

// note: 
    // reducers are pure functions
 