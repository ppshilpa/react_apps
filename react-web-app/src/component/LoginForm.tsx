import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ()=> {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] =useState<any>({email:'',password:'' });
      const handleSubmit = (event: any) => {
const form = event.currentTarget;
        if (form.checkValidity() === false) {
           event.preventDefault();
            event.stopPropagation();
         } else{
            setValidated(true);
            sessionStorage.setItem('auth',"123");
            navigate('/');
         }   
          }
    
      const handleChange = (event:any) => { 
        console.log(event.target.value,event.target.name);
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData[event.target.name]);
      }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
    <Card  border="warning" className='p-5' >
    <Card.Title>Login Form</Card.Title>
    <Card.Body>
        <Form noValidate validated={false} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
         name='email'
         value={formData.email}
        placeholder="enter an email"
         onChange={handleChange}
        required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   type="password"
        name="password"
         value={formData.password}
        placeholder="enter a password"
         onChange={handleChange}
          required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body></Card>
    </div>
  );
}

export default LoginForm;