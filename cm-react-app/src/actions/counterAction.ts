import { INCREMENT, DECREMENT, RESET, SET_COUNTER_TITLE} from "./actionTypes";

    export const setIncrementCounter =()=>({type:INCREMENT});
    export const setDecrementCounter =()=>({type:DECREMENT});
    export const setCounterTitle =(text:string)=>({type:SET_COUNTER_TITLE,payload:text});
    export const resetCounter = () => ({type:RESET});
    