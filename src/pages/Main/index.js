import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
class Main extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1 className="text-center">
                                DC Tools
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row className="bold">
                    <Col lg={2}>
                        App Name
                    </Col>
                    <Col>
                        Details
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        Shift Handoff
                    </Col>
                    <Col>
                        A tool to generate a Shift Handoff.
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        Amber Lights
                    </Col>
                    <Col>
                        Generates a template for use in Amber Light tickets and sends to the selected user via e-mail.
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        Cardboard Tool
                    </Col>
                    <Col>
                        Generates a template for use in Cardboard Alert tickets.  Template is sent to selected user via e-mail.
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Main;
