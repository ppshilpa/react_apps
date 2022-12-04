import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import {NavComponent} from "./component/NavComponent";
import WebRoute from './WebRoute';


const App =() =>{
  return (
    <Container fluid>
      <NavComponent/>
   <WebRoute/>

      
    </Container>
  );
}

export default App;
