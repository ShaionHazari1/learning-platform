import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaAmazon } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';
import { Button } from 'react-bootstrap';




const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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


                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link className='me-3 text-dark' to='/login'>Login</Link>
                                            <Link  className='text-dark' to='/register'>Register</Link>
                                        </>
                                }


                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;