// IMPLEMENTATION FOR ACTIONS. INCREMENT, DECREMENT & RESET OF THE COUNTER

import { INCREMENT, DECREMENT, RESET } from './types';

export const increment = () => ({
    type: INCREMENT
});
export const decrement = () => ({
    type: DECREMENT
})

export const reset = () => ({
    type: RESET
})
// Actions are plain objects that take type and payload as object keys