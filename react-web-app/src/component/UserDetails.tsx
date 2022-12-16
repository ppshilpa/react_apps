import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { userType } from "./UserList"

interface userApiSuccess {
    data: userType,
    support: {
        url: 'string',
        text: 'string'
    }
}
export const UserDetails =()=>{
    const {id} = useParams();
    const [user, setUser]= useState<userApiSuccess>();

    useEffect(()=>{
        fetch(`https://reqres.in/api/users111/${id}`)
        .then(response=>response.json())
        .then(result=> setUser(result))
    },[id])

return <>      <img src={user?.data.avatar} />
{user?.data.first_name}== {user?.data.last_name}</>;
}