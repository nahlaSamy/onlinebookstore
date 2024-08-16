import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store'; 
import ChangePass from '../../../AuthModule/components/ChangePass/ChangePass';
import './NavBar.css';

export default function NavBar() {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userToken'); 
        navigate('/login');
        console.log("Logout clicked"); 
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const quantity = useSelector((state: RootState) => state.cart.quantity);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

                    {/* <Navbar.Brand href="#home"><img src={logo} className='rounded rounded-5 bg-info img-fluid' alt="" /></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="nav-link-with-divider">Home</Nav.Link>
                            <Nav.Link href="#link" className="nav-link-with-divider">About Us</Nav.Link>
                            <Nav.Link href="#link" className="nav-link-with-divider">Books</Nav.Link>
                            <Nav.Link href="#link" className="nav-link-with-divider">New Release</Nav.Link>
                            <Nav.Link href="#link" className="nav-link-with-divider">Contact Us</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown
                                title={<i className="fa-solid fa-user fa-lg mx-2"></i>}
                                id="basic-nav-dropdown"
                                className='me-auto'
                            >
                                <NavDropdown.Item href="#" onClick={handleShow}>
                                    <i className="fa-solid fa-key fa-xs mx-2"></i>Change Password
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>
                                    <i className="fa-solid fa-right-from-bracket fa-xs mx-2"></i>Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <i className="fas fa-shopping-bag fa-lg mx-2"></i>{quantity}
                            </Nav.Link>
                            <Nav.Link>
                                <i className="fa-regular fa-heart fa-lg mx-2"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Body>
                    <ChangePass handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}
