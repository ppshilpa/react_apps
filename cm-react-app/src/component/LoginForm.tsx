import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ()=> {
    const [formValue, setformValue] = useState({
        email: '',
        password: ''
      });
      const navigate = useNavigate();

      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const { email, password } = formValue;
        if (email && email.trim() && password && password.trim()) {
          localStorage.setItem('token', '123');
        }
        navigate('/', { replace: true });
      }
    
      const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        })
      }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
        name="email"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control   type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;