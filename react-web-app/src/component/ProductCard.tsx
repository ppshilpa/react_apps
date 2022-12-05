import React,{ ReactNode, useState } from 'react';
import {product} from './ProductList';
import {CartModel} from './CartModel'
import { Link } from 'react-router-dom';
import { Card, ListGroup,Col, Button, Modal } from 'react-bootstrap';


const ProductCard = (product:product)=>{
const [showModel, setShowModel] = useState(false);
const handleClose = () => setShowModel(false);
const handleShow = () => setShowModel(true);
    return  <Col md={3}>
         <Link to={`/product-details/${product.sku}`} className='nav-link'>
            <Card >
    <Card.Header>{product.title}</Card.Header>
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
    <Card.Footer><Button onClick={handleShow}> Open Model</Button></Card.Footer>
  </Card></Link>

  <CartModel sizes={product.availableSizes} showModel={showModel} handleClose={handleClose}/>
  </Col>;

}
export default ProductCard;
