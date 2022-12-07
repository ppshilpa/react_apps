import { useState } from "react";
import { RefComponent } from "./ RefComponent";


const Homepage = () => {
    const [name, setName]= useState("Shilpa");

    return <><h1>Lets start with React learning</h1>
    <h2>Bingo {name}.....!</h2>
    <button type="button" className="btn btn-info" onClick={()=>setName("Sudha")} >Change Name</button>

    <RefComponent />
</>;

}
export default Homepage;