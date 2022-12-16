import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const UserForm = ()=> {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
const testValidation = (e:any)=>{
    const target = e.target;
    console.log(target?.validationMessage)
}
return (
<Row className='p-3'><Col md={8}>
<h3>
    User Registration Form
  </h3>
  <Form>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Name* </Form.Label>
    <Form.Control type="text" placeholder="e.g Raja Rancho" />
    <Form.Text id="passwordHelpBlock" muted>
            Add First name and last name e.g. 'Raja Rancho'
            </Form.Text>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Phone Number* </Form.Label>
    <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
    <Form.Control type="password" placeholder="e.g 1111111111" />
            </InputGroup>
            <Form.Text id="passwordHelpBlock" muted>
            Enter 10 digit mobile number
            </Form.Text>
  </Form.Group>
</Row>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email* </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Password* </Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Row>

<Form.Group className="mb-3" controlId="formGridAddress1">
  <Form.Label>Address* </Form.Label>
  <Form.Control placeholder="1234 Main St" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Address 2 </Form.Label>
  <Form.Control placeholder="Apartment, studio, or floor" />
</Form.Group>

<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>City* </Form.Label>
    <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State* </Form.Label>
    <Form.Select defaultValue="Choose...">
      <option>Choose...</option>
      <option>...</option>
    </Form.Select>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip* </Form.Label>
    <Form.Control />
    <Form.Text id="passwordHelpBlock" muted>
            Enter 6 digit number e.g 123456
            </Form.Text>
  </Form.Group>
</Row>

<Form.Group className="mb-3" id="formGridCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
</Col></Row>
);
}


