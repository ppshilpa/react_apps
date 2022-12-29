import {
  GET_POST_LIST_STARTED, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE,ADD_UPDATE_POST_STARTED,ADD_UPDATE_POST_SUCCESS,ADD_UPDATE_POST_FAILURE
} from "./actionTypes";

// to get the list of posts - started
export const getPostListStarted = () =>({type:GET_POST_LIST_STARTED});
// // to get the list of posts - success
export const getPostListSuccess = (data: any) => ({type:GET_POST_LIST_SUCCESS,payload:data});
// // to get the list of posts - Error
export const getPostListError = (error: any) => ({type:GET_POST_LIST_FAILURE,payload:error});

export const addUpdatePostStarted = () =>({type:ADD_UPDATE_POST_STARTED});
// // to get the list of posts - success
export const addUpdatePostSuccess = (data: any) => ({type:ADD_UPDATE_POST_SUCCESS,payload:data});
// // to get the list of posts - Error
export const addUpdatePostError = (error: any) => ({type:ADD_UPDATE_POST_FAILURE,payload:error});


