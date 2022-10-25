import React, { useContext } from 'react';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlerLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to='/'>News World</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-2' to="/courses">Courses</Link>
                        <Link to="/faq">FAQ</Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        {user?.displayName}
                                        <Button onClick={handlerLogout} variant="light" style={{ marginLeft: '20px' }}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to="/login">Login</Link>
                                        <Link to="/registration">Registration</Link>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image
                                        roundedCircle
                                        style={{ height: '30px' }}
                                        src={user?.photoURL}
                                    ></Image>
                                    : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;