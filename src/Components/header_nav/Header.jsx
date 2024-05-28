import React, { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Anits from '../../assests/banner4.jpg';

const Header = () => {
    const [isActive, setActive] = useState(false);

    const handleTextClick = () => {
        setActive(true);
    };

    const handleViewTextClick = () => {
        setActive(false);
    };

    return (
        <>
            <header>
                <div className="banner-image" id="anits">
                    <img className="header_img" src={Anits} alt="" />
                </div>
                <Navbar expand="lg" className="nav-bar" collapseOnSelect>
                    <Container fluid>
                        <Navbar.Brand className="nav__logo">
                            IC<span className="nav__logo-part">DECT 2024</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" className="navToggle" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="nav__head me-auto my-2 my-lg-0" navbarScroll>
                                <NavLink className="nav__link nav__align" to="/" onClick={handleViewTextClick}>Home</NavLink>
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#conference" onClick={handleTextClick}>About Conference</Nav.Link>}
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#papers">Call for papers</Nav.Link>}
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#dates">Important Dates</Nav.Link>}
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#team">Conference Team</Nav.Link>}
                                <NavLink className="nav__link nav__align" to="/Gallery" onClick={handleTextClick}>Gallery</NavLink>
                                <NavLink className="nav__link nav__align" to="/institute" onClick={handleTextClick}>About Institute</NavLink>
                                <NavLink className="nav__link nav__align" to="/Submission" onClick={handleTextClick}>Submission</NavLink>
                                <NavLink className="nav__link nav__align" to="/Registration" onClick={handleTextClick}>Registration</NavLink>
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#contact">Contact</Nav.Link>}
                                {!isActive && <Nav.Link className="nav__link nav_style" href="#venue">Venue</Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;
