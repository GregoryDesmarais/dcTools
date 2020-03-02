import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'

class Main extends Component {

    state = {
        cab: "",
        rmu: "",
        customer: "",
        device: "",
        label: "",
        serial: "",
        alert: ""
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.createEmail(`Amber Light Report - ${this.state.customer}`);
        this.setState({
            cab: "",
            rmu: "",
            customer: "",
            device: "",
            label: "",
            serial: "",
            alert: ""
        });
    }



    render() {
        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>
                <Form.Row>
                    <Col lg={1} />
                    <Col lg={5}>
                        <Form.Group controlId="cab">
                            <Form.Label>Cabinet Location</Form.Label>
                            <Form.Control name="dccab" onChange={this.handleInputChange} required placeholder="AZ-01" value={this.state.cab}/>
                        </Form.Group>
                    </Col>
                    <Col lg={5}>
                        <Form.Group controlId="rmu">
                            <Form.Label>RMU</Form.Label>
                            <Form.Control name="dcrmu" onChange={this.handleInputChange} required placeholder="42" value={this.state.rmu}/>
                        </Form.Group>
                    </Col>
                    <Col lg={1} />
                </Form.Row>
                <Form.Row>
                    <Col lg={1} />
                    <Col lg={5}>
                        <Form.Group controlId="customer">
                            <Form.Label>Customer</Form.Label>
                            <Form.Control name="dccustomer" onChange={this.handleInputChange} required placeholder="Joe Customer" value={this.state.customer}/>
                        </Form.Group>
                    </Col>
                    <Col lg={5}>
                        <Form.Group controlId="device">
                            <Form.Label>Device Type</Form.Label>
                            <Form.Control name="dcdevice" onChange={this.handleInputChange} required placeholder="Dell PE 1950" value={this.state.device}/>
                        </Form.Group>
                    </Col>
                    <Col lg={1} />
                </Form.Row>
                <Form.Row>
                    <Col lg={1} />
                    <Col lg={5}>
                        <Form.Group controlId="label">
                            <Form.Label>Device Label</Form.Label>
                            <Form.Control name="dclabel" onChange={this.handleInputChange} required placeholder="Server01" value={this.state.label}/>
                        </Form.Group>
                    </Col>
                    <Col lg={5}>
                        <Form.Group controlId="serial">
                            <Form.Label>SN/Service Tag</Form.Label>
                            <Form.Control name="dcserial" onChange={this.handleInputChange} required placeholder="123456" value={this.state.serial}/>
                        </Form.Group>
                    </Col>
                    <Col lg={1} />
                </Form.Row>
                <Form.Row>
                    <Col lg={1} />
                    <Col>
                        <Form.Group controlId="alert">
                            <Form.Label>Alert</Form.Label>
                            <Form.Control name="dcalert" onChange={this.handleInputChange} required placeholder="Amber Light On" value={this.state.alert}/>
                        </Form.Group>
                    </Col>
                    <Col lg={1} />
                </Form.Row>
                <Form.Row>
                    <Col lg={4} />
                    <Col lg={4} className="text-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Col>
                    <Col lg={4} />
                </Form.Row>
                </Form>
                <div style={{display: "none"}} id="email">
                    <div>During a routine walkthrough of the data center an amber light was noticed on a device in your cabinet:</div>
                    <br/>
                    <div><strong>Cabinet: </strong> {this.state.cab}</div>
                    <div><strong>RMU: </strong> {this.state.rmu}</div>
                    <div><strong>Device: </strong> {this.state.device}</div>
                    <div><strong>Label: </strong> {this.state.label}</div>
                    <div><strong>Service Tag/SN: </strong> {this.state.serial}</div>
                    <div><strong>Alert: </strong> {this.state.alert}</div>
                    <br/><br/>
                    <div>Please let us know if we can assist you in this matter.</div>
                    <div>Thank you</div>
                </div>
            </Container>
        );
    }
}

export default Main;
