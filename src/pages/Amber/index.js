import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

class Main extends Component {

    state = {
        user: "",
        cab: "",
        rmu: "",
        customer: "",
        device: "",
        label: "",
        serial: "",
        alert: ""
    }

    handleInputChange = event => {
        const {id, value} = event.target;
        this.setState({
            [id]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`

        Sending to ${this.state.user}:

        During a routine walkthrough of the data center an amber light was noticed on a device in your cabinet:
        
        Cabinet: ${this.state.cab}
        RMU: ${this.state.rmu}
        Device: ${this.state.device}
        Label: ${this.state.label}
        Service Tag/SN: ${this.state.serial}
        Alert: ${this.state.alert}
        
        Please let us know if we can assist you in this matter.

        Thank you
        `)
    }



    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1 className='text-center'>Amber Light Report Generator</h1>
                </Jumbotron>
                <Form>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="user">
                                <Form.Label>Select User</Form.Label>
                                <Form.Control onChange={this.handleInputChange} as="select" value="Choose...">
                                    <option value="">Select User</option>
                                    <option value="greg@test.com">Greg</option>
                                    <option value="joe@test.com">Joe</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="cab">
                                <Form.Label>Cabinet Location</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="AZ-01" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="rmu">
                                <Form.Label>RMU</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="42" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="customer">
                                <Form.Label>Customer</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="Joe Customer" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="device">
                                <Form.Label>Device Type</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="Dell PE 1950" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="label">
                                <Form.Label>Device Label</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="Server01" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="serial">
                                <Form.Label>SN/Service Tag</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="123456" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={5}>
                            <Form.Group controlId="alert">
                                <Form.Label>Alert</Form.Label>
                                <Form.Control onChange={this.handleInputChange} placeholder="Amber Light On" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Main;
