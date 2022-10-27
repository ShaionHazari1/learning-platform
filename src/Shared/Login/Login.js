import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';







const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { providerLogin, signIn, setLoading } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }



    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))


    }
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
                <div>
                    <Link to='/register'>Please Resister</Link>
                </div>
            </Form>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mt-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>

            </ButtonGroup>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>

        </div>
    );
};
export default Login;