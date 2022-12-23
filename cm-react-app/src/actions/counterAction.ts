import { INCREMENT, DECREMENT, RESET, SET_COUNTER_TITLE} from "./actionTypes";

    export const setIncrementConter =()=>({type:INCREMENT});
    export const setDecrementConter =()=>({type:DECREMENT});
    export const setConterTitle =(text:string)=>({payload:test,type:SET_COUNTER_TITLE});
    export const resetCounter = () => ({type:RESET});
    