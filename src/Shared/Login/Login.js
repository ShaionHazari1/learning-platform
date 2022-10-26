import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';



const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
}

const Login = () => {
    return (
       <div className='container'>
         <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                
            </Form.Text>
            
        </Form>
        <ButtonGroup vertical>
                <Button className='mt-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>

            </ButtonGroup>
       </div>
    );
};
export default Login;