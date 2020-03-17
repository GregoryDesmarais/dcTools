import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import API from "../../utils/CardboardAPI";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


class Cardboard extends Component {

    state = {
        dc: "",
        cab: "",
        customer: "",
        items: "",
        reports: []
    }

    getReports = () => {
        API.get()
            .then(res => {
                console.log(res.data)
                this.setState({
                    reports: res.data
                })
            })
    }
    componentDidMount = () => {

        this.getReports();
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
            dc: this.state.dc,
            cab: this.state.cab,
            customer: this.state.customer,
            items: this.state.items
        }
        API.add(body)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    alert(res.data);
                    this.getReports();
                }
                else {
                    alert(res.data.message)
                }
                this.setState({
                    dc: "",
                    cab: "",
                    customer: "",
                    items: ""
                });
            });
        return;
    }

    remove = (key) => {
        API.remove(key)
            .then(res => {
                if (res.status === 200) {
                    alert("Report has been sucessfully deleted");
                    this.getReports();
                }
            })
    }

    copy = (e, id) => {
        let button = e.target;
        button.innerHTML = "Copied!";
        setTimeout(function () { button.innerHTML = "Copy Report" }, 1500);
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
                            <Col><h4 className="text-center">Add New Report</h4></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Row>
                                    <Col lg={1} />
                                    <Col lg={5}>
                                        <Form.Group controlId="cab">
                                            <Form.Label>Cabinet Location</Form.Label>
                                            <Form.Control name='dcCab' onChange={this.handleInputChange} required value={this.state.cab} placeholder="AZ-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={5}>
                                        <Form.Group controlId="customer">
                                            <Form.Label>Customer</Form.Label>
                                            <Form.Control name='dcCust' onChange={this.handleInputChange} required value={this.state.customer} placeholder="Joe Customer" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={1} />
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={1} />
                                    <Col lg={5}>
                                        <Form.Group controlId="dc">
                                            <Form.Label>Data Center</Form.Label>
                                            <Form.Control name='dcLoc' onChange={this.handleInputChange} required value={this.state.dc} placeholder="CLT" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={5}>
                                        <Form.Group controlId="items">
                                            <Form.Label>Items</Form.Label>
                                            <Form.Control name='dcItems' onChange={this.handleInputChange} required value={this.state.items} placeholder="Small Cardboard Box" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={1} />
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={1} />
                                    <Col className="text-center">
                                        <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
                                    </Col>
                                    <Col lg={1} />
                                </Form.Row>
                                <Form.Row>
                                    <Col lg={4} />
                                    <Col lg={4} className="text-center">
                                    </Col>
                                    <Col lg={4} />
                                </Form.Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col>
                                <h4 className="text-center">View Active Reports</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion>
                                    {this.state.reports.length > 0 ? this.state.reports.map((report, i) => {
                                        return (
                                            <Card bg="dark" key={i}>
                                                <Accordion.Toggle as={Card.Header} eventKey={i}><h5>Customer: {report.customer} Cabinet: {report.cab}</h5></Accordion.Toggle>
                                                <Accordion.Collapse eventKey={i}>
                                                    <Card.Body>
                                                        <div id={"report" + i}>
                                                            <p>During a routine walk through of our {report.dc} Data Center, combustible materials were found within your environment.</p>
                                                            <p>At this time, we kindly request that you remove all cardboard, paper, and like materials from your cabinet/cage immediately to follow our standard best practices for our Data Center.</p>
                                                            <br />
                                                            <div><strong>Location of combustible material:</strong> {report.cab}</div>
                                                            <br />
                                                            <div><strong>Item(s) found:</strong> {report.items}</div>
                                                            <br /><br />
                                                            <p>Please feel free to respond within this ticket or contact us directly regarding this request.</p>
                                                            <p>Thank you</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <Button variant="success" onClick={(e) => this.copy(e, "report" + i)}>Copy Report</Button>
                                                            <Accordion.Toggle as={Button} variant='danger' eventKey={i} onClick={() => this.remove(report._id)}>Delete Report</Accordion.Toggle>
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

export default Cardboard;
