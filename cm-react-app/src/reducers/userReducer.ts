import {
  GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE
} from "../actions/actionTypes";

// // define initial state of user

export interface userType {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
};
export interface userApiSuccess {
  userResponse: {page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: userType[]},
  loading :boolean,
  error: any

}
const initialState = {
  userResponse:{  page: 1,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data:[]},
  loading: false,
  error: null
}

const users = (state=initialState ,action: { type: any; payload: any })=>{
switch(action.type){
      case GET_USER_LIST_STARTED:
        return {...state, loading:true};
  case GET_USER_LIST_SUCCESS:
    const data = action.payload;
    return {...state,userResponse: data, loading:false }
    case GET_USER_LIST_FAILURE:
      const error = action.payload.error; 
      return {...state, error:error, loading:false }
  default:
    return state;

}
}
export default users;