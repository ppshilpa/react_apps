import {product} from './ProductList';

export const ProductCard = (props:product) => {
    return (
<div className="card mb-2">
  <div className="card-header">
  {props.title}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Style:</b> {props.style}</li>
    <li className="list-group-item"><b>Price:</b> {props.price}</li>
    <li className="list-group-item"><b>Description:</b> {props.description}</li>
    <li className="list-group-item"><b>Free shipping:</b> {props.isFreeShipping}</li>
  </ul>    
      </div>
    );
  };