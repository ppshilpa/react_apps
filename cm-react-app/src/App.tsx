import React ,{useState,useEffect} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {NavComponent } from './component/NavComponent';
import WebRoute from './WebRoute';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const AuthorizationContext  = React.createContext('');

const App= () =>{
  const  location  = useLocation();
  const from = location ? location?.pathname : '/';

  const navigate = useNavigate();
  const authenticated = localStorage.getItem('token')||'';

useEffect (()=>{
 return authenticated?  navigate(from, { replace: true }): navigate('/login',{ replace: true });
},[])
  // const PublicRoute = () => {
  //   if (authenticated) {
  //     return <Navigate to="/" replace={true} state={{ from: location }} />;
  //   }
  // };
  
  // const PrivateRoute = () => {
  //   if (!authenticated) {
  //     return (
  //       <Navigate to="/login" replace={true} state={{ from: location }} />
  //     );
  //   }
  //   };
  return (
    <Container fluid>
      <AuthorizationContext.Provider value={authenticated}>
    <><NavComponent/><WebRoute />
    </>
    </AuthorizationContext.Provider>
    </Container>
  );
   
}

export default App;
