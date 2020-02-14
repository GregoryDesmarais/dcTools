import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

class Handoff extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col className="text-center"><h1>Shift Handoff Portal</h1></Col>
                </Row>
            </Container>
        );
    }
}

export default Handoff;
