import { useState } from "react";


const Homepage = () => {
    const [name, setName]= useState("Shilpa");

    return <><h1>Lets start with React learning</h1>
    <h2>Bingo {name}.....!</h2>
    <button type="button" className="btn btn-info" onClick={()=>setName("Sudha")} >Change Name</button>
</>;

}
export default Homepage;