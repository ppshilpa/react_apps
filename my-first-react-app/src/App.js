import abc from './logo.svg';
import React from 'react';
import './App.css'
import HeaderComponent from './Component/HeaderComponent' ;
import {MainContainer} from './Component/MainContainer';
import ProductsList  from './Component/list-card';
 import products from './Component/products.json';
import {ImnpureComponent,BoxCheck} from './Component/ImpureComponent'
export function App() {

  const ssdf={
    display:"prop to show",
    text:"my prop displaying"

  }
  return (
    <div className="App">
     {/* <HeaderComponent  
     propList={{
    display:"Shilpa Pawar",
    logo:abc

  }}   propObj ={ssdf}  simpleProp={3}  /> */}
 {/* <ImnpureComponent  counter={2}/>
 <BoxCheck /> */}
{/* <ImpureComponent/>  */}
<ProductsList data={products}/>
 <MainContainer simpleProp={3}  propObj ={ssdf}/>

    </div>
  );

}

