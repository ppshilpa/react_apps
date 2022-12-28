import { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { userType } from "../reducers/userReducer"

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
        fetch(`https://reqres.in/api/users/${id}`)
        .then(response=>response.json())
        .then(result=> setUser(result))
        .catch(error=>console.log(error))
    },[id])

return <Row><Col md={3}> <img src={user?.data.avatar} /></Col>
<Col><ul>
    <li><b>Name</b>: {user?.data.first_name} {user?.data.last_name}</li>
    <li><b>Email</b>: {user?.data.email} </li>

</ul>
</Col></Row>;
}