import React,{ ReactNode } from 'react';
import {product} from './ProductList';
import {CartModel} from './CartModel'
interface AppState {
    isModelOpen: boolean
 }

export class ProductCard extends React.Component<product,AppState>{
    
constructor(props:product){
super(props);
this.state =({
    isModelOpen :false
});
}
 showModel = () => {
this.setState({
    isModelOpen :true
});

}
render(): ReactNode {
    console.log(this.props.availableSizes)
    return (
        <>
 <div className="card mb-2">
  <div className="card-header">
  {this.props.title}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Style:</b> {this.props.style}</li>
    <li className="list-group-item"><b>Price:</b> {this.props.price}</li>
    <li className="list-group-item"><b>Description:</b> {this.props.description}</li>
    <li className="list-group-item"><b>Free shipping:</b> {this.props.isFreeShipping}</li>
  </ul>
  <div className="card-footer">
  <button type="button" className="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#CartModal">Add to cart</button>
  </div>    
      </div> 
<CartModel  />
</>
    );
}
  };