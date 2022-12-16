import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface userType{
    id: number,
    email:string,
    first_name: string,
    last_name: string,
    avatar:string
};
interface userApiSuccess {
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:userType[]
}
export const UserList =()=>{
const [UserList,setUserList] = useState<userApiSuccess>();

useEffect(()=>{
fetch('https://reqres.in/api/users')
.then(response=>response.json())
.then(result=> setUserList(result))
},[]);

    return <>
    {UserList?.data.map((user)=>(
<div key={user.id}> <Link to={`/user-detail/${user.id}`} >{user.email}</Link></div>
    ))}
    </>;
}