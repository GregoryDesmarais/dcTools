import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Template from "../../components/Template";


class Handoff extends Component {

    state = {
        names: "",
        shift: "",
        dc: "",
        items: []
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    render() {
        return (<>
            <Container>
                <Jumbotron>
                    <Col className="text-center"><h1>Shift Handoff Portal</h1></Col>
                </Jumbotron>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="names">
                                        <Form.Label>Tech(s) on site</Form.Label>
                                        <Form.Control name="dcnames" onChange={this.handleInputChange} value={this.state.names} />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col lg={6}>
                                    <Form.Group controlId="shift">
                                        <Form.Label>Shift</Form.Label>
                                        <Form.Control name="dcshift" onChange={this.handleInputChange} placeholder="1st" value={this.state.shift} />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group controlId="dc">
                                        <Form.Label>Data Center</Form.Label>
                                        <Form.Control name="dcdc" onChange={this.handleInputChange} value={this.state.dc} />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="type">
                                    <Form.Label>Ticket Type</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} as="select" >
                                        <option value="annouce">Announcements</option>
                                        <option value="events">Events</option>
                                        <option value="maint">Changes/Maintenance</option>
                                        <option value="issues">Known Issue</option>
                                        <option value="tapes">Tape Rotation</option>
                                        <option value="backup">Backups</option>
                                        <option value="patch">Patching</option>
                                        <option value="other">Other</option>
                                        <option value="notes">Notes</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col>
                        <Template
                            names={this.state.names}
                            shift={this.state.shift}
                            dc={this.state.dc}
                            items={this.state.items}
                        />
                    </Col>
                </Row>
            </Container>
        </>);
    }
}

export default Handoff;
