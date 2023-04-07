import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Styles = Styled.div `
.navbar {
    height: 80px;
}
.navbar-brand{
    margin-left: 40px;
    font-size: 40px;
    text-decoration-line:none;
}
a, .navbar-brand, .navbar-nav .nav-link, .link{
    color: #b0b7c6;
    text-decoration:none;
    &:hover {
        text-decoration: none;
        color: white;
    }
}
`


export default function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Styles>
                <Navbar  className='me mb-3 mb-lg-0' collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand><Link to="/">Ipro®</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" />
                    <Nav>

                        <Nav.Link ><Link to="/Store">О нас</Link></Nav.Link>
                        <Nav.Link ><Link to="/ProductList">Товары</Link> </Nav.Link>
                    </Nav>
                </Navbar>
            </Styles>
        </>
    )
}