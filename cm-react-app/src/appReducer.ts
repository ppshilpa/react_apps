import { combineReducers } from "redux";
import counter from './reducers/counterReducer';
const appReducer = combineReducers(
    {
        counter
        }
);
export default appReducer;