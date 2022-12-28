import { useDispatch, useSelector } from "react-redux";
import { counterType } from "../reducers/counterReducer";
import {setIncrementConter,setDecrementConter,setConterTitle,resetCounter} from '../actions/counterAction';
import { Button } from "react-bootstrap";
import { RootState } from "..";
import { useState } from "react";

export const Counter = ()=>{
    const dispatch = useDispatch();
const [title, setTiltle] = useState('qqqq');
    const counterState = useSelector<RootState,counterType>((state)=>state.counter);
    return <> 

          <h2>{counterState.counterTitle} ({counterState.counter})</h2>
           <Button className="m-2" onClick={()=>dispatch(setIncrementConter())}>+1</Button>
          <Button className="m-2" onClick={()=>dispatch(setDecrementConter())}>-1</Button>
          <Button className="m-2" onClick={()=>dispatch(resetCounter())}>Reset Counter</Button> 
          <input type="text" value={title}  onChange={e=>setTiltle(e.target.value)}/> 
          <Button className="m-2" onClick={()=>dispatch(setConterTitle(title))}>set Counter title</Button>
    </>;
}