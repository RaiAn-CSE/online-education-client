import React, { useContext } from 'react';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';
import logo from '../../../images/logo/logo.png'

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
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand className='fw-bolder'>Online Education</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-2 fw-semibold' to="/courses">Courses</Link>
                        <Link className='me-2 fw-semibold' to="/faq">FAQ</Link>
                        <Link to="/blog">Blog</Link>
                        <NavDropdown className='fw-semibold' title="Theme" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">
                                Dark
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Light
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handlerLogout} variant="light" style={{ marginLeft: '20px' }}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-2 fw-semibold' to="/login">Login</Link>
                                        <Link className='me-2 fw-semibold' to="/registration">Registration</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <div data-tip={user.displayName}>
                                        <Image
                                            roundedCircle
                                            style={{ height: '30px' }}
                                            src={user?.photoURL}
                                        ></Image>
                                        <ReactTooltip />
                                    </div>
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