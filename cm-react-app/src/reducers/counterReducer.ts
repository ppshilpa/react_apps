import { INCREMENT, DECREMENT, RESET,SET_COUNTER_TITLE} from "../actions/actionTypes";

export interface counterType{
    counter:number,
    counterTitle:string
}

const initialState ={
    counter:10,
    counterTitle:' Alexa'
   
}

const counter = (state=initialState,action: { type: any;payload?:string })=>{
    switch(action.type){
        case INCREMENT:
            return {...state, counter:state.counter+1,counterTitle:'Simmi'};
        case DECREMENT:
            return {...state, counter:state.counter-1,counterTitle:'Rimmi'}; 
        case RESET:
            return {...state, counter:0,counterTitle:'Shilpa'};  
        case SET_COUNTER_TITLE:
            return {...state,counterTitle:action?.payload||''}; 
            default:
              return  {...state};
    }
   

}
export default counter;