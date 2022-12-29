import { combineReducers } from "redux";
import counter from './reducers/counterReducer';
import users from './reducers/userReducer';
import {posts,post} from './reducers/postReducer';
const appReducer = combineReducers(
    {
        counter,
        users,
        posts,
        post
        }
);
export default appReducer;