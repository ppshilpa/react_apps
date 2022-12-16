import { useEffect, useState } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface userType {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};
interface userApiSuccess {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: userType[]
}
export const UserList = () => {
    const [UserList, setUserList] = useState<userApiSuccess>();

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(result => setUserList(result))
    }, []);

    return <><Row className="p-4">
        <Col>
            <Button variant="primary" > Add more User ++</Button>
        </Col>
    </Row>
        <Row className="p-4"><Col>  <Accordion defaultActiveKey="1">
            {UserList?.data.map((user) => (
                <Accordion.Item eventKey={`${user.id}`} key={user.id}>
                    <Accordion.Header>{user.first_name}  {user.last_name}</Accordion.Header>
                    <Accordion.Body>
                        <Row><Col md="2"><img src={user.avatar} /></Col>
                            <Col >Email : <Link to={`/user-detail/${user.id}`} >{user.email}</Link> </Col>
                            <Col className="align-self-end col-auto">
                                <Button>Update</Button>{' '}
                                <Button>Delet</Button>{' '}
                                <Button><Link to={`/user-detail/${user.id}`} className="nav-link">Go to User Profile</Link></Button></Col >

                        </Row>

                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion >
        </Col></Row></>

}