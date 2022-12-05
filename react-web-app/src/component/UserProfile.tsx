import { useEffect, useState } from "react"
import { Row, Col, Badge, ListGroup, Button } from "react-bootstrap"
import { callbackify } from "util";

const UserProfile = () => {

  const [random, setRandom] = useState(0);
  const [checkFlag, setFlag] = useState(false);

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

  useEffect(() => {
    console.log('ComponentDidUpdate==', random)
  });

  useEffect(() => {
    console.log('ComponentDidMount==', random)
  }, []);

  useEffect(() => {
    if(checkFlag)
    console.log('ComponentDidUpdate with==', random);
  }, [checkFlag,random]);

  useEffect(() => {
    return () => {
      setFlag(true);
      console.log('ComponentWillUnmount==', random)
    }
  });

  const setRandomNumber = () => {
    setFlag(true);
    setRandom(Math.random())
  };
  
  return (
    <Row></Row>
  )
}
export default UserProfile;