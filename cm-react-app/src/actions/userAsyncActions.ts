import  {
  getUserListStarted, getUserListSuccess, getUserListError
} from "../actions/userActions";
import { userApiSuccess } from "../reducers/userReducer";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { Api } from "./actionTypes";

// // get user list


export const getUserList = () => {
  return  async (dispatch: (arg0: { type: string; payload?: any; }) => void) =>  {
  dispatch(getUserListStarted());
  try {
    const res = await fetch(Api.user);
    const data:userApiSuccess = await res.json();
    dispatch(getUserListSuccess(data));
  } catch (err) {
    dispatch(getUserListError(err));
  }
}
}
