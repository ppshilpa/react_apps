import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";
interface product {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string
};

const App =() =>{
  return (
    <div  className="App container-fluid">
      <header className="App-header">
       
      </header>
      <ProductList data={products as product[]} />
    </div>
  );
}

export default App;
