import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import API from "../../utils/AmberAPI";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Main extends Component {

    state = {
        cab: "",
        rmu: "",
        customer: "",
        device: "",
        label: "",
        serial: "",
        alert: "",
        savedAlerts: [],
    }

    getAlerts = () => {
        API.getAmber()
            .then(res => {
                this.setState({
                    savedAlerts: res.data
                })
            })
    }

    componentDidMount = () => {
        this.getAlerts();
    }

    componentDidUpdate = () => {
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let body = {
            cab: this.state.cab,
            rmu: this.state.rmu,
            customer: this.state.customer,
            device: this.state.device,
            label: this.state.label,
            serial: this.state.serial,
            alert: this.state.alert
        }
        API.addAmber(body)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    alert(res.data);
                    this.getAlerts();
                }
                else {
                    alert(res.data.message)
                }
                this.setState({
                    cab: "",
                    rmu: "",
                    customer: "",
                    device: "",
                    label: "",
                    serial: "",
                    alert: ""
                });
            });
        return;
        // this.props.createEmail(`Amber Light Report - ${this.state.customer}`);
    }

    removeAmber = (key) => {
        API.removeAmber(key)
            .then(res => {
                if (res.status === 200) {
                    alert("Alert has been sucessfully deleted");
                    this.getAlerts();
                }
            })
    }

    copyAlert = (e, id) => {
        let button = e.target;
        button.innerHTML = "Copied!";
        setTimeout(function () { button.innerHTML = "Copy Alert" }, 1500);
        console.log(id)
        let div = document.querySelector(`#${id}`)
        div.setAttribute("contenteditable", true)
        div.setAttribute("style", "color:black;background-color:white")
        div.focus();
        document.execCommand("SelectAll")
        document.execCommand("copy");
        document.getSelection().removeAllRanges();
        div.setAttribute("contenteditable", false)
        div.removeAttribute("style")
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className="text-center">Add New Alert</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Row>
                                        <Col lg={1} />
                                        <Col lg={5}>
                                            <Form.Group controlId="cab">
                                                <Form.Label>Cabinet Location</Form.Label>
                                                <Form.Control name="dccab" onChange={this.handleInputChange} required placeholder="AZ-01" value={this.state.cab} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={5}>
                                            <Form.Group controlId="rmu">
                                                <Form.Label>RMU</Form.Label>
                                                <Form.Control type='number' name="dcrmu" onChange={this.handleInputChange} required placeholder="42" value={this.state.rmu} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={1} />
                                    </Form.Row>
                                    <Form.Row>
                                        <Col lg={1} />
                                        <Col lg={5}>
                                            <Form.Group controlId="customer">
                                                <Form.Label>Customer</Form.Label>
                                                <Form.Control name="dccustomer" onChange={this.handleInputChange} required placeholder="Joe Customer" value={this.state.customer} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={5}>
                                            <Form.Group controlId="device">
                                                <Form.Label>Device Type</Form.Label>
                                                <Form.Control name="dcdevice" onChange={this.handleInputChange} required placeholder="Dell PE 1950" value={this.state.device} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={1} />
                                    </Form.Row>
                                    <Form.Row>
                                        <Col lg={1} />
                                        <Col lg={5}>
                                            <Form.Group controlId="label">
                                                <Form.Label>Device Label</Form.Label>
                                                <Form.Control name="dclabel" onChange={this.handleInputChange} required placeholder="Server01" value={this.state.label} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={5}>
                                            <Form.Group controlId="serial">
                                                <Form.Label>SN/Service Tag</Form.Label>
                                                <Form.Control name="dcserial" onChange={this.handleInputChange} required placeholder="123456" value={this.state.serial} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={1} />
                                    </Form.Row>
                                    <Form.Row>
                                        <Col lg={1} />
                                        <Col>
                                            <Form.Group controlId="alert">
                                                <Form.Label>Alert</Form.Label>
                                                <Form.Control name="dcalert" onChange={this.handleInputChange} required placeholder="Amber Light On" value={this.state.alert} />
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
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className="text-center">View Alerts</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion>
                                    {this.state.savedAlerts.length > 0 ? this.state.savedAlerts.map((alert, i) => {
                                        return (
                                            <Card bg="dark" key={i}>
                                                <Accordion.Toggle as={Card.Header} eventKey={i}><h5>Customer: {alert.customer} Cabinet: {alert.cab}</h5></Accordion.Toggle>
                                                <Accordion.Collapse eventKey={i}>
                                                    <Card.Body>
                                                        <div id={"alert" + i}>
                                                            <div>During a routine walkthrough of the data center, an amber light was noticed on a device in your cabinet:</div>
                                                            <br />
                                                            <div><strong>Cabinet: </strong> {alert.cab}</div>
                                                            <div><strong>RMU: </strong> {alert.rmu}</div>
                                                            <div><strong>Device: </strong> {alert.device}</div>
                                                            <div><strong>Label: </strong> {alert.label}</div>
                                                            <div><strong>Service Tag/SN: </strong> {alert.serial}</div>
                                                            <div><strong>Alert: </strong> {alert.alert}</div>
                                                            <br /><br />
                                                            <div>Please let us know if we can assist you in this matter.</div>
                                                            <div>Thank you</div>
                                                        </div>
                                                        <div className="text-right">
                                                            <Button variant="success" onClick={(e) => this.copyAlert(e, "alert" + i)}>Copy Alert</Button>
                                                            <Accordion.Toggle as={Button} variant='danger' eventKey={i} onClick={() => this.removeAmber(alert._id)}>Delete Alert</Accordion.Toggle>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        )
                                    }) : null
                                    }
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;
