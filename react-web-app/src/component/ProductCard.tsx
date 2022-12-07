import React,{ ReactNode, useContext, useState } from 'react';
import {product} from './ProductList';
import {CartModel} from './CartModel'
import { Link } from 'react-router-dom';
import { Card, ListGroup,Col, Button, Modal } from 'react-bootstrap';
import { UserContext } from '../App';


const ProductCard = (product:product)=>{
  const user = useContext(UserContext);
  const [showModel, setShowModel] = useState(false);
const handleClose = () => setShowModel(false);
const handleShow = () => setShowModel(true);
    return  <Col md={3}>
       
            <Card >
    <Card.Header>{product.title} =={user.name}</Card.Header>
    <ListGroup variant="flush">
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Price</div>
          {product.price}
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">SKU</div>
          {product.sku}
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Description</div>
          {product.description}
        </div>
      </ListGroup.Item>
    </ListGroup>
    <Card.Footer><Button onClick={handleShow}> Open Model</Button>
    <Link to={`/product-details/${product.sku}`} className='nav-link'><Button > Open Details</Button></Link>
    </Card.Footer>
  </Card> 

  <CartModel sizes={product.availableSizes} showModel={showModel} handleClose={handleClose}/>
  </Col>;

}
export default ProductCard;
