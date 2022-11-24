import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";

const App =() =>{
  return (
    <div  className="App container-fluid">
      <ProductList data={products} cardName={"test name"} />
    </div>
  );
}

export default App;
