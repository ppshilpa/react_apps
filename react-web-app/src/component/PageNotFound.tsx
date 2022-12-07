import { useContext } from "react";
import {UserContext} from "../App"
const PageNotFound = ()=>{
  const user = useContext(UserContext);
    return <div className="text-center py-5">
    <h1 className="display-1">404</h1>
    <h2>File not found for {user.name} ==={user.id}</h2>
  </div>
}
export default PageNotFound;