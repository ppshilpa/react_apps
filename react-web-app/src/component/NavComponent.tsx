import React from "react";
import logo from '../logo.svg';
import { Link, useNavigate} from 'react-router-dom';
import WebRoute from "../WebRoute";
import { Button } from "react-bootstrap";

export const NavComponent=()=>{
  const navigate = useNavigate();

  const logOut = ()=>{
    sessionStorage.removeItem('auth');
    navigate('/signin');
  }
return (<header>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      React App
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/topics" className="nav-link">Topics</Link>
        </li>
        <li className="nav-item">
        <Link to="/product-list" className="nav-link">Products</Link> 
        </li>
        <li className="nav-item">
        <Link to="/user-list" className="nav-link">Users</Link> 
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Button variant="dark" onClick={logOut}>Logout</Button>
    </div>
  </div>
</nav>
</header>)
    

}
