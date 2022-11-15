import abc from './logo.svg';
import React from 'react';
import './App.css'
import HeaderComponent from './Component/HeaderComponent' ;
import CardComponent from './Component/CardComponent'
export function App() {

  const propObj={
    display:"prop to show",
    text:"my prop displaying"

  }
  return (
    <div className="App">
     <HeaderComponent  
     propList={{
    display:"Shilpa Pawar",
    logo:abc

  }}   propObj ={propObj}  simpleProp={3}  />
<CardComponent />
    </div>
  );

}

