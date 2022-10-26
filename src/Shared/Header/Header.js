import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaAmazon } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" text="dark" bg="light" variant="light">
                <Container>
                    <FaAmazon className='me-2 text-secondary'></FaAmazon>
                    <Navbar.Brand><span className='text-warning'>Web</span>Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                            </Nav>
                        <Nav>
                            <Nav.Link><Link className='text-dark' to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link className='text-dark' to='/course'>Course</Link></Nav.Link>
                            <Nav.Link><Link className='text-dark' to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link className='text-dark' to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link><Link className='text-dark' to='/login'>Login</Link></Nav.Link>
                            <Nav.Link><Link className='text-dark' to='/signup'>Signup</Link></Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;