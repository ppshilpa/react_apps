import {
    GET_POST_LIST_STARTED, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE, ADD_UPDATE_POST_FAILURE,ADD_UPDATE_POST_SUCCESS,ADD_UPDATE_POST_STARTED
  } from "../actions/actionTypes";

  export interface postType {
    userId?: number,
    id: number,
    title: string,
    body: string

};
export interface postApiRes {
    data:postType[],
    loading: boolean,
    error:any
}
const initialStateFetch ={
    data:[],
    loading:false,
    error: null
}

export const posts = (state=initialStateFetch, action: { type: any; payload: any })=>{
    switch(action.type){
        case GET_POST_LIST_STARTED:
            return {...state, loading:true};
        case GET_POST_LIST_SUCCESS:
            const data = action.payload;
           return {...state, data:data,loading:false }
        case GET_POST_LIST_FAILURE:  
        const error = action.payload.error;
        return {...state,error: error,loading:false }
        default:
        return state;
    }
}

const intialStatePost = {
    data:undefined,
    loading: false,
    error:null
};
export interface postAUApiRes {
    data:postType|undefined,
    loading: boolean,
    error:any
}
export const post = (state= intialStatePost,action:{ type: any; payload: any })=>{
    switch(action.type){
        case ADD_UPDATE_POST_STARTED:
            return {...state, loading:true};
        case ADD_UPDATE_POST_SUCCESS:
            const data = action.payload;
           return {...state, data:data,loading:false }
        case ADD_UPDATE_POST_FAILURE:  
        const error = action.payload.error;
        return {...state,error: error,loading:false }
        default:
        return state;
    }
}
