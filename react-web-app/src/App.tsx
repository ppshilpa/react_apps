import React, { useState ,createContext} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import {NavComponent} from "./component/NavComponent";
import { UseMemoComponent } from './component/UsememoComponent';
import WebRoute from './WebRoute';
export const UserContext = createContext({name:"", id:0});

const App =() =>{
  const [user, setUser]=useState({name:"Kiyara", id:23455678});
  
  return (
    <Container fluid>
      <NavComponent/>
      {/* <UseMemoComponent/> */}
      <UserContext.Provider value={user}>
<WebRoute/>
</UserContext.Provider>
    </Container>
  );
}

export default App;
