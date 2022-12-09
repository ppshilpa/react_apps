import { useState } from "react";
import { RefComponent } from "./ RefComponent";
import { FormExample } from "./FormExample"

const Homepage = () => {
    const [name, setName]= useState("Shilpa");

    return <><h1>Lets start with React learning</h1>
    <h2>Bingo {name}.....!</h2>
    <button type="button" className="btn btn-info" onClick={()=>setName("Sudha")} >Change Name</button>
<FormExample />
    <RefComponent />
</>;

}
export default Homepage;