import { Row, Col, Badge, ListGroup } from "react-bootstrap"

const UserProfile=() =>{
    const user = {
        "login": "defunkt",
        "id": 2,
        "node_id": "MDQ6VXNlcjI=",
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": false
      }
      return (
        <Row><Col md={3}>
            <img src={user.avatar_url}/>
        </Col>
        <Col>
        <ListGroup>
        <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">login</div>
          {user.login}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">login</div>
          {user.login}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">id</div>
          {user.id}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">node_id</div>
          {user.node_id}
        </div>
      </ListGroup.Item>    
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">url</div>
          <a href={user.url}>{user.url}</a>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">followers_url</div>
          <a href={user.followers_url}>{user.followers_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">html_url</div>
          <a href={user.url}>{user.html_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">repos_url</div>
          <a href={user.url}>{user.repos_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">subscriptions_url</div>
          <a href={user.url}>{user.subscriptions_url}</a>
        </div>
      </ListGroup.Item>   
       <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">type</div>
          {user.type}
        </div>
      </ListGroup.Item>    
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">site_admin</div>
          {user.site_admin}
        </div>
      </ListGroup.Item>
    </ListGroup>
        </Col></Row>
      )
}
export default UserProfile;