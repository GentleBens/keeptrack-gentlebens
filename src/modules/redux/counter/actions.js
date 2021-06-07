// IMPLEMENTATION FOR ACTIONS. INCREMENT, DECREMENT & RESET OF THE COUNTER
//, SHOW_MODAL, HIDE_ALERT
import { INCREMENT, DECREMENT, RESET, CLOSE, MESSAGE } from './types';
//, CLICK, REMOVE_CLICK


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
export const message = () => ({
    type: MESSAGE
});
// For SOCKET.IO
// export function increment(counter){
//     socket.emit('increment', {counter})
//     return function(dispatch){
//         dispatch({
//          type: INCREMENT   
//         })
//     }
// }
// export function decrement(counter){
//     socket.emit('decrement', {counter});
//     return function(dispatch) {
//         dispatch({
//             type: DECREMENT       
//         })
//     }
// }
// Actions are plain objects that take type and payload as object keys