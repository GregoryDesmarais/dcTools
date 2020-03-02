import React, { Component } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button'


class Cardboard extends Component {

    state = {
        dc: "",
        cab: "",
        customer: "",
        items: ""
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.createEmail(`Flammable Items Report - ${this.state.customer}`);
        this.setState({
            dc: "",
            cab: "",
            customer: "",
            items: ""
        })
    }


    render() {
        return (
            <Container>
                    <Form.Row>
                        <Col lg={1}/>
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
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={1}/>
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
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={1}/>
                        <Col className="text-center">
                        <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
                        </Col>
                        <Col lg={1}/>
                    </Form.Row>
                    <Form.Row>
                        <Col lg={4} />
                        <Col lg={4} className="text-center">
                        </Col>
                        <Col lg={4} />
                    </Form.Row>
                    <div style={{display: "none"}} id='email'>
                        <p>During a routine walk through of our {this.state.dc} Data Center, combustible materials were found within your environment.</p>
                        <p>At this time, we kindly request that you remove all cardboard, paper, and like materials from your cabinet/cage immediately to follow our standard best practices for our Data Center.</p>
                        <br/>
                        <div><strong>Location of combustible material:</strong> {this.state.cab}</div>
                        <br/>
                        <div><strong>Item(s) found:</strong> {this.state.items}</div>
                        <br/><br/>
                        <p>Please feel free to respond within this ticket or contact us directly regarding this request.</p>
                        <p>Thank you</p>
                    </div>
            </Container>
        );
    }
}

export default Cardboard;
