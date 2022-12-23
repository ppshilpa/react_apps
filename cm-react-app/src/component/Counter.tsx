import { useDispatch, useSelector } from "react-redux";
import { counterType } from "../reducers/counterReducer";
import {setIncrementConter,setDecrementConter,setConterTitle,resetCounter} from '../actions/counterAction';
import { Button } from "react-bootstrap";
import { RootState } from "..";

export const Counter = ()=>{
    const dispatch = useDispatch();
    const counterState = useSelector<RootState,counterType>((state)=>state.counter);
    return <> 
          <h2>{counterState.counterTitle} ({counterState.counter})</h2>
          <Button className="m-2" onClick={()=>dispatch(setIncrementConter())}>+1</Button>
          <Button className="m-2" onClick={setDecrementConter}>-1</Button>
          <Button className="m-2" onClick={resetCounter}>Reset Counter</Button>
    </>;
}