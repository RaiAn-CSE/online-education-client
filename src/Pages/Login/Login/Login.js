import React, { useContext, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginUser, loginInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        loginInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, { replace: true })
                console.log(from)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <div className='mb-2'>
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                        <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                </div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button className='ms-2' variant="outline-primary" type="submit">
                    <Link to="/registration">Registration</Link>
                </Button>

                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;