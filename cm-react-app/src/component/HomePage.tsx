import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { counterType } from "../reducers/counterReducer";


const Homepage = () => {
    const [name, setName]= useState("Shilpa");
    const counterState = useSelector<RootState,counterType>((state)=>state.counter);
    return <><h1>Lets start with React learning ...{counterState.counterTitle}</h1>
    <h2>Bingo {name}.....!</h2>
    <button type="button" className="btn btn-info" onClick={()=>setName("Sudha")} >Change Name</button>

</>;

}
export default Homepage;