import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import {NavComponent} from "./component/NavComponent";
import WebRoute from './WebRoute';


const App =() =>{
  return (
    <Container fluid>
      <NavComponent/>
    <Row>
      <Col md={3} lg={4} className="p-1">dfgddd</Col>
      <Col><WebRoute/></Col>

    </Row>
      
    </Container>
  );
}

export default App;
