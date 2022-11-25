import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";
import {NavComponent} from "./component/NavComponent";

const App =() =>{
  return (
    <div  className="container-fluid">
      <NavComponent/>
      <ProductList data={products} cardName={"test name"} />
    </div>
  );
}

export default App;
