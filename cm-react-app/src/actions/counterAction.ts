import { INCREMENT, DECREMENT, RESET, SET_COUNTER_TITLE} from "./actionTypes";

    export const setIncrementConter =()=>({type:INCREMENT});
    export const setDecrementConter =()=>({type:DECREMENT});
    export const setConterTitle =(text:string)=>({type:SET_COUNTER_TITLE,payload:text});
    export const resetCounter = () => ({type:RESET});
    