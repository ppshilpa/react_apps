import {useState } from "react";
import { Modal, Button, Form, Row,Col } from "react-bootstrap";
type propList = {
  sizes: string[];
  showModel: boolean;
  handleClose: () => void;
}
export const CartModel = (props: propList) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
alert("calling");
    console.log(form);
  //  if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
  //  }

    setValidated(true);
  };

  return (
    <>
      <Modal show={props.showModel} onHide={props.handleClose} onSubmit={handleSubmit}>
      <Form validated={validated}   onSubmit={handleSubmit}>
 <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="validationCustom01">
              <label >Email</label>
              <Form.Control type="email" required placeholder="Enter email" />
</Form.Group>
<Form.Group controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <Form.Group controlId="validationCustom06">
              <label >Email</label>
              <Form.Control as="select" required >
                <option >Select Quantity</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </Form.Control>
            </Form.Group>
            <div className="form-group">
              <label>Select Size</label><br />
              {props.sizes.map((size: string) => (<div className="form-check form-check-inline" key={size}>
                <input className="form-check-input" type="radio" name="size" defaultValue={size} />
                <label className="form-check-label" >{size}</label>
              </div>))}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button type="submit">Submit form</Button>
        </Modal.Footer>
        </Form>

      </Modal>

    </>)

}
