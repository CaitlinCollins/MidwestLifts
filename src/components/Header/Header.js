import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" className="navbar">
                <Navbar.Brand><Link to="/home" className="navbar-brand">MIDWEST LIFTS, LLC</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="nav-link"><Link to="/home" className="nav-link">HOME</Link></Nav.Link>
                    <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/lifts" className="nav-link">LIFTS</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/lighting" className="nav-link">LIGHTING</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/flooring" className="nav-link">FLOORING</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link to="/galleries" className="nav-link">GALLERIES</Link></Nav.Link>
                    <Nav.Link><Link to="/contact" className="nav-link">CONTACT</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>


          {/* <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand"><Link to="/home" className="navbar-brand">MIDWEST LIFTS, LLC</Link></a>
                    <div id="navbar-right">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link"><Link to="/home" className="nav-link">HOME</Link></a>
                                <NavDropdown className="my-dropdown">
                                    <NavDropdown.Toggle className="nav-link">
                                    SERVICES
                                    </NavDropdown.Toggle>
                                    <NavDropdown.Menu>
                                    <NavDropdown.Item><Link to="/lifts" className="nav-link">LIFTS</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/lighting" className="nav-link">LIGHTING</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item><Link to="/flooring" className="nav-link">FLOORING</Link>
                                    </NavDropdown.Item>
                                    </NavDropdown.Menu>
                                </NavDropdown>
                                <a className="nav-link"><a className="nav-link"><Link to="/galleries" className="nav-link">GALLERIES</Link></a></a>
                                <a className="nav-link"><a className="nav-link"><Link to="/contact" className="nav-link">CONTACT</Link></a></a>
                            </div>
                        </div>
                     </div>
            </div>
        </nav> */}
    </div>
    )

}

export default Header;