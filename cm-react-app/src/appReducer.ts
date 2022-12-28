import { combineReducers } from "redux";
import counter from './reducers/counterReducer';
import users from './reducers/userReducer'
const appReducer = combineReducers(
    {
        counter,
        users
        }
);
export default appReducer;