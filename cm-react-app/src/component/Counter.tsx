import { useDispatch, useSelector } from "react-redux";
import { counterType } from "../reducers/counterReducer";
import {setIncrementCounter,setDecrementCounter,setCounterTitle,resetCounter} from '../actions/counterAction';
import { Button } from "react-bootstrap";
import { RootState } from "..";
import { useState } from "react";

export const Counter = ()=>{
    const dispatch = useDispatch();
const [title, setTiltle] = useState('qqqq');
    const counterState = useSelector<RootState,counterType>((state)=>state.counter);
    return <> 

          <h2>{counterState.counterTitle} ({counterState.counter})</h2>
           <Button className="m-2" onClick={()=>dispatch(setIncrementCounter())}>+1</Button>
          <Button className="m-2" onClick={()=>dispatch(setDecrementCounter())}>-1</Button>
          <Button className="m-2" onClick={()=>dispatch(resetCounter())}>Reset Counter</Button> 
          <input type="text" value={title}  onChange={e=>setTiltle(e.target.value)}/> 
          <Button className="m-2" onClick={()=>dispatch(setCounterTitle(title))}>set Counter title</Button>
    </>;
}