import React from 'react';
import { UrlWithStringQuery } from 'url';
import ProductCard from './ProductCard';
import products from "../data/products.json";

export type product = {
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
    title: string;
  };
  
  const ProductList =() =>{
  
     return (<>
     <div className='row'>
      { products.map((product)=>(<ProductCard {...product} key={product.sku} />)) }
</div>  
     </>
     )
}
export default ProductList;