import React, { useContext, useState } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { loginUser, loginInWithGoogle, loginInWithGithub } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    // Google sign in 
    const handleGoogleSignIn = () => {
        loginInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                console.log(from)
            })
            .catch(error => console.error(error))
    }

    // GitHub sign in 
    const githubSignIn = () => {
        loginInWithGithub(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })
                console.log(from)
            })
            .catch(error => {
                console.error(error)
            })
    }

    // Email Password Sign in 
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
                        <Button onClick={githubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
                </div>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                {/* Go to registration Page  */}
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