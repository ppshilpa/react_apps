import React,{ ReactNode } from 'react';
import {product} from './ProductList';
import {CartModel} from './CartModel'
import { Link } from 'react-router-dom';

interface AppState {
    isModelOpen: boolean
 }

export class ProductCard extends React.Component<any,AppState>{
    
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
console.log(this.props.availableSizes,"===",this.state.isModelOpen)

}
render(): ReactNode {
    return (
        <div className='col-3'>
            <Link to={`/product-details/${this.props.sku}/${this.props.title}`} className='nav-link'>
 <div className="card mb-2">
  <div className="card-header">
  {this.props.title}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Style:</b> {this.props.style}</li>
    <li className="list-group-item"><b>Price:</b> {this.props.sku}</li>
    <li className="list-group-item"><b>Description:</b> {this.props.description}</li>
    <li className="list-group-item"><b>Free shipping:</b> {this.props.isFreeShipping}</li>
  </ul>
  <div className="card-footer">
  <Link to={`/product-details/${this.props.sku}/${this.props.title}`} className='btn btn-dark '> Go To Details</Link>

  <button type="button" className="btn btn-dark float-end" data-bs-toggle="modal" data-bs-target={"#id-"+this.props.sku} >Add to cart</button>
  </div>    
      </div> 
<CartModel sizes={this.props.availableSizes} idValue={this.props.sku}/>
</Link>
</div>
    );
}
  };