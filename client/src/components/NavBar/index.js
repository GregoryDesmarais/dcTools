import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar"
import "./index.css"

class NavBar extends Component {

    state = {
        current: ""
    }

componentDidMount = () => {
    this.setState({
        current: document.querySelector(`[href="${this.props.path}"`).textContent
    })
}

componentDidUpdate = (a,b) => {
    
}

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href='/'>DC Tools<span className="loc">{this.state.current.indexOf("DC Tools") > -1 ? "" : ` - ${this.state.current} `}</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href='/' className={this.props.path === "/" ? "active" : ""}>Home</Nav.Link> */}
                        <Nav.Link href='/handoff' className={this.props.path === "/handoff" ? "active" : ""}>Shift Handoff</Nav.Link>
                        <Nav.Link href='/viewhandoff' className={this.props.path === "/viewhandoff" ? "active" : ""}>View Handoffs</Nav.Link>
                        <Nav.Link href='/amber' className={this.props.path === "/amber" ? "active" : ""}>Amber Lights</Nav.Link>
                        <Nav.Link href='/combustible' className={this.props.path === "/cardboard" ? "active" : ""}>Combustible Report</Nav.Link>
                        {/* <Nav.Link href='/users' className={this.props.path === "/users" ? "active" : ""}>Users</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
