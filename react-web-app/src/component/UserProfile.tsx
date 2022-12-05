import { useEffect, useState } from "react"
import { Row, Col, Badge, ListGroup, Button } from "react-bootstrap"
import { callbackify } from "util";

const UserProfile = () => {

  const [random, setRandom] = useState(0);
  const [checkFlag, setFlag] = useState(false);

  

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