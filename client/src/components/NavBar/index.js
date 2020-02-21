import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"

function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href='/'>DC Tools</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href='/' className={props.path === "/" ? "active" : ""}>Home</Nav.Link>
                <Nav.Link href='/handoff' className={props.path === "/handoff" ? "active" : ""}>Shift Handoff</Nav.Link>
                <Nav.Link href='/amber' className={props.path === "/amber" ? "active" : ""}>Amber Lights</Nav.Link>
                <Nav.Link href='/cardboard' className={props.path === "/cardboard" ? "active" : ""}>Cardboard Tool</Nav.Link>
                <Nav.Link href='/users' className={props.path === "/users" ? "active" : ""}>Users</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
