import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/'>DC Tools</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/handoff'>Shift Handoff</Nav.Link>
                <Nav.Link href='/amber'>Amber Lights</Nav.Link>
                <Nav.Link href='/cardboard'>Cardboard Tool</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
