// IMPLEMENTATION FOR ACTIONS. INCREMENT AND DECREMENT OF THE COUNTER

import { INCREMENT, DECREMENT } from './types';

export const increment = () => ({
    type: INCREMENT
});
export const decrement = () => ({
    type: DECREMENT
})

// Actions are plain objects that take type and payload as object keys