import React ,{useState,useEffect} from 'react';
//import './App.css';
import { Container } from 'react-bootstrap';
import {NavComponent } from './component/NavComponent';
import WebRoute from './WebRoute';

const App= () =>{
  return (
    <Container fluid>
    <><NavComponent/>
    <WebRoute />
    </>
    </Container>
  );
   
}

export default App;
