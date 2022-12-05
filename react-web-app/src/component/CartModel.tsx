import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
type propList ={
    sizes:string[];
    showModel: boolean;
    handleClose: ()=>void;
}
export const CartModel=(props:propList)=> {
console.log(props);
    return (
        <>
       <Modal show={props.showModel} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3 needs-validation" >
                    <div className="form-group">
<label >Email</label>
<input type="email" className="form-control" placeholder="Enter email"/>
</div>    
<div className="form-group">
<label >Password</label>
<input type="password" className="form-control" placeholder="Password"/>
</div>    
                        <div className="form-group">
                            <select className="form-select" defaultValue={3} >
                                <option >Select Quantity</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Size</label><br />
                            { props.sizes.map((size:string)=>(<div className="form-check form-check-inline" key={size}>
                                <input className="form-check-input" type="radio" name="size" value={size} />
                                <label className="form-check-label" >{size}</label>
                            </div>)) }
                        </div>
                    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
          Checkout
          </Button>
        </Modal.Footer>
      </Modal>

        </>)

}
