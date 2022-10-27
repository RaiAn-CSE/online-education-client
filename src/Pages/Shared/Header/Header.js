import React, { useContext, useState } from 'react';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';
import logo from '../../../images/logo/logo.png'
import DarkModeToggle from "react-dark-mode-toggle";
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    const handlerLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className='navbar-container' bg="light" expand="lg">
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
                        <div className='mt-2'>
                            <Link className='mx-2 fw-semibold' to="/">Home</Link>
                            <Link className='mx-2 fw-semibold' to="/courses">Courses</Link>
                            <Link className='mx-2 fw-semibold' to="/faq">FAQ</Link>
                            <Link className='mx-2 fw-semibold' to="/blog">Blog</Link>
                        </div>
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
                        <div className='mt-2'>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={40}
                            />
                        </div>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handlerLogout} variant="light" style={{ marginLeft: '20px' }}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='mx-2 fw-semibold' to="/login">Login</Link>
                                        <Link className='mx-2 fw-semibold' to="/registration">Registration</Link>
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