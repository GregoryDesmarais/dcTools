import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/'>DC Tools</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href='/dcTools/'>Home</Nav.Link>
                <Nav.Link href='/dcTools/handoff'>Shift Handoff</Nav.Link>
                <Nav.Link href='/dcTools/amber'>Amber Lights</Nav.Link>
                <Nav.Link href='/dcTools/cardboard'>Cardboard Tool</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
