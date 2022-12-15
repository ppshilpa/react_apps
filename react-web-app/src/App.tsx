import React, { useState, createContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { NavComponent } from "./component/NavComponent";
import { UseMemoComponent } from './component/UsememoComponent';
import WebRoute from './WebRoute';
export const UserContext = createContext({ name: "", id: 0 });

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const [user, setUser] = useState({ name: "Kiyara", id: 23455678 });
  const auth = sessionStorage.getItem('auth');
  console.log('aaaaa', auth);
  useEffect(() => {
    if (auth) {
      navigate(path);
      if(path ==='/signin')
      navigate('/');
    } else navigate('signin');

  }, [auth, path]);


  return (
    <Container fluid>
      {auth && <NavComponent />}
      <UserContext.Provider value={user}>
        <WebRoute />
      </UserContext.Provider>
    </Container>
  );
}

export default App;
